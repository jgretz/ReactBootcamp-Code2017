import React, {Component} from 'react';
import axios from 'axios';
import autobind from 'class-autobind';

const OMDB_API = 'http://www.omdbapi.com/';

export default class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      searchText: '',
      searchResults: [],
    };
  }

  // actions
  handleSearchTextChange(e) {
    this.setState({searchText: e.target.value});
  }

  handleSearch() {
    axios.get(`${OMDB_API}?s=${this.state.searchText}&r=json`)
    .then(response => {
      this.setState({
        searchResults: (response.data.Search || []),
      });
    });

    this.setState({searchText: ''});
  }

  // render
  renderList() {
    return this.state.searchResults.map(movie => {
      const handleSelect = () => {
        this.props.movieSelected(movie.imdbID);
      };

      return (
        <li key={movie.imdbID} onClick={handleSelect}>{movie.Title} ({movie.Year})</li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Find a Movie</h1>
          <input value={this.state.searchText} onChange={this.handleSearchTextChange} />
          &nbsp;
          <input type="button" value="Search" onClick={this.handleSearch} />
        </div>
        <div>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

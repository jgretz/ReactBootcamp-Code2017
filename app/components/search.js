import React, {Component} from 'react';
import autobind from 'class-autobind';
import {connect} from 'react-redux';

import {searchForMovies, selectMovie, updateSearchText} from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  // actions
  handleSearch() {
    this.props.searchForMovies(this.props.searchText);
    this.props.updateSearchText('');
  }

  // render
  renderList() {
    return this.props.searchResults.map(movie => {
      const handleSelect = () => {
        this.props.selectMovie(movie.imdbID);
      };

      return (
        <li key={movie.imdbID} onClick={handleSelect}>{movie.Title} ({movie.Year})</li>
      );
    });
  }

  render() {
    const {updateSearchText: handleSearchText} = this.props;

    return (
      <div className="col-xs-2 search">
        <div>
          <h1>Find a Movie</h1>
          <input value={this.props.searchText} onChange={handleSearchText} />
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

const mapStateToProps = state =>
({
  searchText: state.searchText,
  searchResults: state.searchResults,
});

export default connect(mapStateToProps, {searchForMovies, selectMovie, updateSearchText})(Search);

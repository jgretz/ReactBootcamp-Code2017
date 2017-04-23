import React, {Component} from 'react';
import autobind from 'class-autobind';

import Search from './search';
import Detail from './detail';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      selectedMovie: null,
    };
  }

  movieSelected(selectedMovie) {
    this.setState({selectedMovie});
  }

  render() {
    return (
      <div>
        <Search movieSelected={this.movieSelected} />
        <Detail movie={this.state.selectedMovie} />
      </div>
    );
  }
}

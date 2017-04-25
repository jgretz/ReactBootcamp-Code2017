import React, {Component} from 'react';
import autobind from 'class-autobind';

import Search from './search';
import Detail from './detail';
import List from './list';

export default class Home extends Component {
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
        <List />
        <Detail movie={this.state.selectedMovie} />
      </div>
    );
  }
}

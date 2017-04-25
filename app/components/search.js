import React, {Component} from 'react';
import autobind from 'class-autobind';
import {connect} from 'react-redux';

import {updateText, search} from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleSearch() {
    this.props.search(this.props.searchText);
  }

  // render
  render() {
    return (
      <div>
        <div>
          <h1>Find a Movie</h1>
          <input value={this.props.searchText} onChange={this.props.updateText} />
          &nbsp;
          <input type="button" value="Search" onClick={this.handleSearch} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({searchText}) => ({searchText});

export default connect(mapStateToProps, {updateText, search})(Search);

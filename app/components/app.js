import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Menu from './menu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

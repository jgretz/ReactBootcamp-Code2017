import React from 'react';
import {Link} from 'react-router';

export default () =>
(
  <div className="menu">
    <Link to="/movies">Movies</Link>
    <Link to="/about">About</Link>
  </div>
);

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Movies from './components/movies';
import About from './components/about';
import NotFoundPage from './components/not_found';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Movies} />
    <Route path="/movies" component={Movies} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

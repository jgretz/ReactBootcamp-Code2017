import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import searchText from './reducers/searchText';
import movies from './reducers/movies';

const rootReducer = combineReducers({
  routing: routerReducer,

  searchText,
  movies,
});

export default rootReducer;

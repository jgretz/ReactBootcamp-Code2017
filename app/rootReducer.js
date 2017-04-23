import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import movie from './reducers/movie';
import searchResults from './reducers/searchResults';
import searchText from './reducers/searchText';

const rootReducer = combineReducers({
  routing: routerReducer,
  movie,
  searchResults,
  searchText,
});

export default rootReducer;

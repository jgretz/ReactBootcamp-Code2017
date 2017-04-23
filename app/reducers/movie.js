import {MOVIE_DETAIL} from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case MOVIE_DETAIL:
      return action.payload;

    default:
      return state;
  }
};

import {TEXT_UPDATED} from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case TEXT_UPDATED:
      return action.payload;

    default:
      return state;
  }
};

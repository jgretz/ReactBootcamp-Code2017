import axios from 'axios';

export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export const search = words =>
  axios.get(`http://www.omdbapi.com/?s=${words}`)
  .then(response => ({
    type: SEARCH_RESULTS,
    payload: response.data.Search,
  }));

import axios from 'axios';

const OMDB_API = 'http://www.omdbapi.com/';

export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export const searchForMovies = searchText =>
  axios.get(`${OMDB_API}?s=${searchText}&r=json`)
  .then(response =>
    ({
      type: SEARCH_RESULTS,
      payload: response.data.Search,
    })
  );

import axios from 'axios';

const OMDB_API = 'http://www.omdbapi.com/';
const NY_API = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
const NY_API_KEY = '5c36e0dd71d140c09f8cfb6e580365a9';

export const MOVIE_DETAIL = 'MOVIE_DETAIL';

export const selectMovie = imdbID => dispatch =>
  axios.get(`${OMDB_API}?i=${imdbID}&r=json`)
  .then(omdbResponse => {
    const {data: om} = omdbResponse;

    axios.get(`${NY_API}?api-key=${NY_API_KEY}&query=${om.Title}`)
    .then(nyResponse => {
      const {data: ny} = nyResponse;
      const link = ny.results[0];

      dispatch({
        type: MOVIE_DETAIL,
        payload: {
          ...om,
          nyLink: link ? link.link.url : null,
        },
      });
    });
  });

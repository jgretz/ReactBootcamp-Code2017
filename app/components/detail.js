import React, {Component} from 'react';
import autobind from 'class-autobind';
import axios from 'axios';

const OMDB_API = 'http://www.omdbapi.com/';
const NY_API = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
const NY_API_KEY = '5c36e0dd71d140c09f8cfb6e580365a9';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      detail: null,
    };
  }

  componentWillMount() {
    this.loadMovie(this.props.movie);
  }

  componentWillReceiveProps(nextProps) {
    this.loadMovie(nextProps.movie);
  }

  loadMovie(imdbID) {
    if (!imdbID) {
      return;
    }

    axios.get(`${OMDB_API}?i=${imdbID}&r=json`)
    .then(omdbResponse => {
      const {data: om} = omdbResponse;

      axios.get(`${NY_API}?api-key=${NY_API_KEY}&query=${om.Title}`)
      .then(nyResponse => {
        const {data: ny} = nyResponse;
        const link = ny.results[0];

        this.setState({
          detail: {
            ...om,
            nyLink: link ? link.link.url : null,
          },
        });
      });
    });
  }

  // render
  render() {
    const {detail} = this.state;
    if (!detail) {
      return null;
    }

    return (
      <div>
        <h1>{detail.Title}</h1>
        <img src={detail.Poster} alt={`Movie Poster for ${detail.Title}`} />
        <ul>
          <li>Rating: {detail.Rated}</li>
          <li>Released: {detail.Released}</li>
          <li>Main Cast: {detail.Actors}</li>
          <li>Summary: {detail.Plot}</li>
          <li>
            <a href={detail.nyLink} target="_blank">
              NY Times Review
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

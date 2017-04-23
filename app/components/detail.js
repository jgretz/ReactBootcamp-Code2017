import React from 'react';
import {connect} from 'react-redux';

const detail = ({movie}) => {
  if (!movie) {
    return <div className="col-xs-10 detail" />;
  }

  return (
    <div className="col-xs-10 detail">
      <img src={movie.Poster} alt={`Movie Poster for ${movie.Title}`} />
      <h1>{movie.Title}</h1>
      <ul>
        <li>Rating: {movie.Rated}</li>
        <li>Released: {movie.Released}</li>
        <li>Main Cast: {movie.Actors}</li>
        <li>Summary: {movie.Plot}</li>
        <li>
          <a href={movie.nyLink} target="_blank">
            NY Times Review
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state =>
({
  movie: state.movie,
});

export default connect(mapStateToProps)(detail);

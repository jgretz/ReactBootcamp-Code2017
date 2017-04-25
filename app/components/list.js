import React from 'react';
import {connect} from 'react-redux';

const render = props => {
  const {movies} = props;

  return (
    <ul>
      {
        movies.map(m => <li key={m.imdbID}>{m.Title} ({m.Year})</li>)
      }
    </ul>
  );
};

const mapStateToProps = ({movies}) => ({movies});

export default connect(mapStateToProps)(render);

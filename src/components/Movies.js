import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(m => {
        return <div>
          <h3>{m.title}</h3>
          <h4>{m.time}</h4>
          <ul>{m.genres.map(g => <li>{g}</li>)}</ul>
        </div>
      })}
    </div>
  );
};

export default Movies;

import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieDetails = () => {
  const { movieData } = useContext(MovieContext);

  if (!movieData) {
    return <div>No movie selected</div>;
  }

  const { Title, Year, Rated, Plot, Poster } = movieData;

  return (
    <div>
      <h2>{Title}</h2>
      <p>Year: {Year}</p>
      <p>Rated: {Rated}</p>
      <p>{Plot}</p>
      <img src={Poster} alt={Title} />
    </div>
  );
};

export default MovieDetails;

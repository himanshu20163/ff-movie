import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from './MovieContext';

const MovieApp = () => {
  const { setMovieData } = useContext(MovieContext);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {   
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=bbd65a97&s=${search}`
      );

      if (response.data.Response === 'True') {
        setMovieData(response.data.Search[0]);
      } else {
        setMovieData(null);
        setError(response.data.Error);
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('An error occurred while searching for movies.');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    searchMovies();
  }, []); // Fetch initial movie data

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <h1>Movie App</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : null}
    </div>
  );
};

export default MovieApp;

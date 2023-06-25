import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState(null);

  return (
    <MovieContext.Provider value={{ movieData, setMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};

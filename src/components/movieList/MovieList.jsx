import React from "react";

const MovieList = ({ movies, renderMovieLink, onSelectMovie }) => {
  const handleMovieSelect = (movieId) => {
    if (onSelectMovie) {
      onSelectMovie(movieId);
    }
  };

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => handleMovieSelect(movie.id)}>
          {renderMovieLink ? renderMovieLink(movie) : movie.title}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, renderMovieLink }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {renderMovieLink ? (
            renderMovieLink(movie)
          ) : (
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

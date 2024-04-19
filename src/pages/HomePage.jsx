import React, { useState, useEffect } from "react";
import { fetchMovies } from "../components/API/API";
import MovieList from "../components/movieList/MovieList";
import { Link } from "react-router-dom";
import { DNA } from "react-loader-spinner";

const HomePage = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovies();
        setPopularMovies(response.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? (
        <DNA />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <MovieList
          movies={filteredMovies.length > 0 ? filteredMovies : popularMovies}
          renderMovieLink={(movie) => (
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          )}
        />
      )}
      {selectedMovieId && <div>Selected Movie ID: {selectedMovieId}</div>}
    </div>
  );
};

export default HomePage;

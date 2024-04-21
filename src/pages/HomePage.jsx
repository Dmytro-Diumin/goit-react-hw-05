import React, { useState, useEffect } from "react";
import { fetchMovies } from "../components/API/API";
import MovieList from "../components/movieList/MovieList";
import { Link } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import NotFoundPage from "./NotFoundPage";

const HomePage = () => {
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
    <>
      {isLoading && <DNA />}

      {error && <NotFoundPage />}

      <h1>Trending today</h1>
      {popularMovies.length > 0 && <MovieList movies={popularMovies} />}
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import MovieList from "../components/movieList/MovieList";
import { fetchMovieQuery } from "../components/API/API";
import { Link, useSearchParams } from "react-router-dom";
import "../index.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get("query");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await fetchMovieQuery(movie);
        setSearchedMovies(moviesData.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    if (movie !== "") {
      fetchMovies();
    } else {
      setSearchedMovies([]);
    }
  }, [movie]);

  const handleSearch = () => {
    setMovies(searchedMovies);
    setSearchTerm("");
    setSearchParams({ query: searchTerm });
  };

  return (
    <div className="wrap">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList
        movies={movies}
        renderMovieLink={(movie) => (
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        )}
      />
    </div>
  );
};

export default MoviesPage;

import React, { useEffect, useState } from "react";
import MovieList from "../components/movieList/MovieList";
import { fetchMovieQuery } from "../components/API/API";
import { Link, useSearchParams } from "react-router-dom";
import "../index.css";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get("query");

  const toastStyles = {
    borderRadius: "8px",
    background: "#333",
    color: "#fff",
  };

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

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const moviesData = await fetchMovieQuery(searchTerm);
      setMovies(moviesData.results);
      setSearchParams({ query: searchTerm });
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div className="wrap">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
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

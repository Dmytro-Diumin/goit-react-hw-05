import React, { useEffect, useState } from "react";
import MovieList from "../components/movieList/MovieList";
import { fetchMovieQuery } from "../components/API/API";
import { useSearchParams } from "react-router-dom";
import "../index.css";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const movie = searchParams.get("query");

  const toastStyles = {
    borderRadius: "8px",
    background: "#333",
    color: "#fff",
  };

  useEffect(() => {
    if (!movie) return;
    async function fetchMovies() {
      try {
        const moviesData = await fetchMovieQuery(movie);
        setSearchedMovies(moviesData.results);
        setError(null);
      } catch (error) {
        setError(error.message || "Failed to fetch movies.");
        setSearchedMovies([]);
      }
    }

    if (movie !== null && movie !== "") {
      fetchMovies();
    } else {
      setSearchedMovies([]);
    }
  }, [movie]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setSearchParams({ query: searchTerm });
      setSearchTerm("");
    } else {
      toast.error("Please enter a search term.", {
        style: toastStyles,
      });
    }
  };

  return (
    <div className="wrap">
      <Toaster position="top-right" reverseOrder={false} />
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={searchedMovies} />
    </div>
  );
};

export default MoviesPage;

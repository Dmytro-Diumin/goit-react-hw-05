import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieId } from "../components/API/API";
import { DNA } from "react-loader-spinner";
import "../index.css";
import GoBackButton from "../components/goBackButton/GoBackButton";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieData = await fetchMovieId(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <DNA />;
  }

  return (
    <>
      <GoBackButton />
      <div className="wrapImg">
        <div className="wrapDetails">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.original_title}`}
          />
        </div>
        <div>
          <h3>{movie.title}</h3>
          <p>User score {Math.floor(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Geners</h3>
          <p>{movie.genres?.map((gener) => gener.name + " ")}</p>
        </div>
      </div>
      <div className="wrapAddition">
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;

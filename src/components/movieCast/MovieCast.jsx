import React, { useEffect, useState } from "react";
import { fetchMovieCast } from "../API/API";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchMovieCast(id);
        setCast(castData.cast);
      } catch (error) {
        console.error("Failed to fetch cast:", error);
      }
    };

    fetchCast();
  }, [id]);
  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

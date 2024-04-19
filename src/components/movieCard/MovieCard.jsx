import { Link } from "react-router-dom";

const MovieCard = ({ movie, state }) => {
  return (
    <Link to={`/movies/${movie.id}`} state={state}>
      {movie.original_title}
    </Link>
  );
};

export default MovieCard;

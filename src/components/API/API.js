import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmVkMzVmMTUyMGNiNTUxNWI4ODI1MmM4M2M5NmU1ZCIsInN1YiI6IjY2MWQ2Yjk3NmY0M2VjMDE4NzVkYjA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WUzZ5t6RM1LvIG4sJkPZ0K-O5yXVbw1GR9QVhL2jomQ",
  },
};

const fetchMovies = async () => {
  const URL = "trending/movie/day?language=en-US";
  const response = await axios.get(URL, options);
  return response.data;
};

const fetchMovieId = async (movie_id) => {
  const URL = `movie/${movie_id}?language=en-US`;
  const response = await axios.get(URL, options);
  return response.data;
};

const fetchMovieCast = async (movie_id) => {
  const URL = `movie/${movie_id}/credits?language=en-US`;
  const response = await axios.get(URL, options);
  return response.data;
};
const fetchMovieReviews = async (movie_id) => {
  const URL = `movie/${movie_id}/reviews?language=en-US`;
  const response = await axios.get(URL, options);
  return response.data;
};
const fetchMovieQuery = async (query) => {
  const URL = `search/movie?query=${query}&language=en-US`;
  const response = await axios.get(URL, options);
  return response.data;
};
export {
  fetchMovies,
  fetchMovieId,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieQuery,
};

import React from "react";
const MovieCard = ({movie}) => {
  return (
    <div>
      <h5>{movie.title}</h5>
      <h5>Rating: {movie.vote_average}</h5>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    </div>
  );
};
export default MovieCard;
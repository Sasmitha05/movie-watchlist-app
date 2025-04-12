// MovieList.jsx
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, toggleWatched, toggleFavorite, deleteMovie } = useContext(MovieContext);
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleWatched={toggleWatched}
          toggleFavorite={toggleFavorite}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
};

export default MovieList;


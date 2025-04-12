// Favorites.jsx
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { movies, toggleWatched, toggleFavorite, deleteMovie } = useContext(MovieContext);
  const favs = movies.filter((m) => m.favorite);
  return (
    <div className="movie-list">
      <h2>Favorites</h2>
      {favs.length ? (
        favs.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleWatched={toggleWatched}
            toggleFavorite={toggleFavorite}
            deleteMovie={deleteMovie}
          />
        ))
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};
export default Favorites;
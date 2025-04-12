import React from "react";
// Optional: for extra button styling if needed

const MovieCard = ({ movie, toggleWatched, toggleFavorite, deleteMovie }) => {
  return (
    <div className={`movie-card fade-in ${movie.watched ? "watched" : "to-watch"}`}>
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-genre">{movie.genre}</p>
      <p>{movie.year}</p>
      <p className="movie-status">Status: {movie.watched ? "Watched" : "To Watch"}</p>

      <div className="btn-group">
        <button className="watch-btn" onClick={() => toggleWatched(movie.id)}>
          {movie.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>

        <button
          className="watch-btn"
          onClick={() => toggleFavorite(movie.id)}
          style={{ backgroundColor: movie.favorite ? "#ff8ac4" : "#cd0494" }}
        >
          {movie.favorite ? "❤️ Favorited" : "♡ Add to Favorites"}
        </button>

        <button
          className="watch-btn"
          style={{ backgroundColor: "#e53e3e" }}
          onClick={() => deleteMovie(movie.id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

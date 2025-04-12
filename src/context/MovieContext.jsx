// MovieContext.jsx
import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", watched: false, favorite: false },
    { id: 2, title: "Titanic", genre: "Romance", watched: true, favorite: true },
    { id: 3, title: "The Dark Knight", genre: "Action", watched: true, favorite: true },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", watched: false, favorite: false },
    { id: 5, title: "The Shawshank Redemption", genre: "Drama", watched: true, favorite: false },
    { id: 6, title: "The Godfather", genre: "Crime", watched: true, favorite: true },
    { id: 7, title: "Forrest Gump", genre: "Drama", watched: false, favorite: false },
    { id: 8, title: "Avengers: Endgame", genre: "Superhero", watched: true, favorite: false },
  ]);
  

  const addMovie = (movie) => setMovies((prev) => [...prev, movie]);

  const deleteMovie = (id) => setMovies((prev) => prev.filter((m) => m.id !== id));

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  };

  const toggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorite: !m.favorite } : m))
    );
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, deleteMovie, toggleWatched, toggleFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
};

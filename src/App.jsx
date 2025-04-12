// App.jsx
import React from "react";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-title fade-in">My Movie Watchlist</h1>
      <AddMovieForm />
      <MovieList />
      <div className="nav-links">
        <Link to="/favorites">Favorites</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  );
};
export default App;


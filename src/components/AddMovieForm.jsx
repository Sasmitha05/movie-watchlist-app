// AddMovieForm.jsx
import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
console.log("MovieContext:", MovieContext);
const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const yearRegex = /^\d{4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRegex.test(title) || !yearRegex.test(year)) {
      alert("Invalid input");
      return;
    }
    const newMovie = {
      id: Date.now(),
      title,
      genre,
      year,
      watched: false,
      favorite: false,
    };
    addMovie(newMovie);
    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form className="add-form fade-in" onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;


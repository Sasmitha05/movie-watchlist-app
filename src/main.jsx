import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Favorites from "./components/Favorites";
import Stats from "./components/MovieStats";
import { MovieProvider } from "./context/MovieContext";
import Layout from "./components/Layout";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/stats" element={<Stats />} />
          </Route>
      </Routes>
    </Router>
  </MovieProvider>
);

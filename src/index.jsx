import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Movie from "./pages/movies/Movies";
import Search from "./pages/search/Search";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} />
        <Route path="/" element={<Home/>} />
        <Route path="movie/:id" element={<Movie/>} />
        <Route path="search" element={<Search/>} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  </React.StrictMode>
);

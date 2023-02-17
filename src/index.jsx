import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movies/Movies";
import Search from "./pages/Search/Index";


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

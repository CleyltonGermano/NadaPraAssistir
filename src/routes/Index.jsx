import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";
import Movies from "../pages/Movies/Index";
import Search from "../pages/Search/Index";

function RoutesProject() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default RoutesProject;

import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Movies from "../pages/Movies/index";
import Search from "../pages/Search/index";

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

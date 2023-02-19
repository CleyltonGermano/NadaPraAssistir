import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./styles.css";

function Navbar (){
  return (
    <div className="navbar_div">
      <h2>
        <BiCameraMovie />
        <Link to="/">Nada pra assistir?</Link>
      </h2>

      {/* <a>
          <Link to="/search">Search</Link>
        </a>
        <br />
        <a>
          <Link to="/movie/1">Movie</Link>
        </a> */}

      <input type="text" placeholder="Search" />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
      <Outlet />

    </div>
  );
}
export default Navbar;

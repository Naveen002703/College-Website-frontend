
import React from "react";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";
const Nav = function () {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-details">Add Student</Link>
          </li>
          <li>
            <Link to="/view-details">View All Details</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;

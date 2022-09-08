import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    color: "crimson",
    fontWeight: "bold",
    margin: "1px 20px",
    textDecoration: "none",
  };
  let linkStyle = {
    textDecoration: "none",
    margin: "1px 20px",
  };
  return (
    <>
      <div className="nav">
        <div className="nav__wrapper">
          <NavLink
            to="/"
            className="nav__link"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="nav__link"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className="nav__link"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Contact
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    color: "crimson",
    fontWeight: "bold",
    textDecoration: "none",
  };
  let linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
      >
        Contact
      </NavLink>
      <Outlet />
    </>
  );
};
export default Navbar;

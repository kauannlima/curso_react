// 2 - LINKS COM O LINK ROUTER
import React from "react";
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;

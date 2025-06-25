// 2 - LINKS COM O LINK ROUTER
import React from "react";
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </nav>
  );
};

export default NavBar;

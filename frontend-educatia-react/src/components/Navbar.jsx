// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <button>Página Principal</button>
      </Link>
      <Link to="/cursos">
        <button>Cursos</button>
      </Link>
    </nav>
  );
};

export default Navbar;


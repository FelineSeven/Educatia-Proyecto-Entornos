// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#5EA1C5" }}>
      {/* Botones a la izquierda */}
      <div>
        <Link to="/">
          <button>Página Principal</button>
        </Link>
        <Link to="/cursos">
          <button>Cursos</button>
        </Link>
      </div>

      {/* Botón a la derecha */}
      <div>
        <Link to="/cursos-estudiante">
          <button>Vista Estudiantes</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

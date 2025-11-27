import React, { useEffect, useState } from "react";
import { listarCursos } from "../services/cursosService";
import { useNavigate } from "react-router-dom";

export default function CursosEstudiante() {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarCursos = async () => {
      const data = await listarCursos();
      console.log("Cursos recibidos:", data);
      setCursos(data);
    };
    cargarCursos();
  }, []);

  return (
     <div>
    <h1 className="tituloPagina">¡Bienvenid@ a tus Cursos!</h1>

    {cursos.length === 0 && <p>No hay cursos disponibles.</p>}

    <div className="cards-grid">
      {cursos.map(c => (
        <div key={c.idCurso} className="card">

          {/* Contenido alineado a la izquierda */}
          <div className="card-content">
            <h3 className="card-title">{c.nombreAsignatura}</h3>
            <p className="card-descripcion">{c.descripcion}</p>
          </div>

          {/* Botón abajo a la derecha */}
          <div className="card-buttons">
            <button 
              onClick={() => navigate(`/temas-estudiante/${c.idCurso}`)}
            >
              Ver Temas
            </button>
          </div>

        </div>
      ))}
    </div>
  </div>


    /*
    <div>
      <h2>Cursos</h2>
      <ul>
        {cursos.length === 0 && <p>No hay cursos disponibles.</p>}
        {cursos.map(c => (
          <li key={c.idCurso}>
            <strong>{c.nombreAsignatura}</strong>
            <button onClick={() => navigate(`/temas-estudiante/${c.idCurso}`)}>
              Ver Temas
            </button>
          </li>
        ))}
      </ul>
    </div>
    */
  );
}

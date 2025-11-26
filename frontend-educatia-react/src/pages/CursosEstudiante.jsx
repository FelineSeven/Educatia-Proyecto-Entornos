import React, { useEffect, useState } from "react";
import { listarCursos } from "../services/cursosService";
import { useNavigate } from "react-router-dom";

export default function CursosEstudiante() {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarCursos = async () => {
      const data = await listarCursos();
      setCursos(data);
    };
    cargarCursos();
  }, []);

  return (
    <div>
      <h2>Cursos</h2>
      <ul>
        {cursos.length === 0 && <p>No hay cursos disponibles.</p>}
        {cursos.map(c => (
          <li key={c.idCurso}>
            <strong>{c.nombre}</strong>
            <button onClick={() => navigate(`/temas-estudiante/${c.idCurso}`)}>
              Ver Temas
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { listarTemasPorCurso } from "../services/temasService";

export default function TemasEstudiante() {
  const { idCurso } = useParams();
  const [temas, setTemas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarTemas = async () => {
      const data = await listarTemasPorCurso(idCurso);
      setTemas(data);
    };
    cargarTemas();
  }, [idCurso]);

  return (
    <div>
      <h2>Temas del Curso</h2>
      <ul>
        {temas.length === 0 && <p>No hay temas disponibles.</p>}
        {temas.map(t => (
          <li key={t.idTema}>
            {t.nombre}
            <button onClick={() => navigate(`/examen-estudiante/${t.idTema}`)}>
              Ver Examen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

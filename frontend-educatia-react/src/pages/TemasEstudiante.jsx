import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { listarTemas } from "../services/temaService";

export default function TemasEstudiante() {
  const { idCurso } = useParams();
  const [temas, setTemas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarTemas = async () => {
      const data = await listarTemas(idCurso);
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
            {t.titulo}
            <button onClick={() => navigate(`/examenes-estudiante/${t.idTema}`)}>
              Ver Examenes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

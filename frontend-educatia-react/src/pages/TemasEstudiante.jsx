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
    <h1 className="tituloPagina">Temas del Curso</h1>

    <div className="table-container">
      {temas.length === 0 && <p>No hay temas disponibles.</p>}

      {temas.length > 0 && (
        <table className="custom-table">
          <thead>
            <tr>
              
              <th>Título</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {temas.map(t => (
              <tr key={t.idTema}>
                
                <td>{t.titulo}</td>
                <td>{t.descripcion || "Sin descripción"}</td>

                <td>
                  <button
                    className="table-button"
                    onClick={() => navigate(`/examenes-estudiante/${t.idTema}`)}
                  >
                    Ver Exámenes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>


    /*
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
    */
  );
}

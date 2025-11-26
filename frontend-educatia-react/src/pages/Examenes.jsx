import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  listarExamenes,
  eliminarExamen
} from "../services/examenService";

export default function Examenes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const idTema = searchParams.get("idTema");
  const nombreTema = searchParams.get("tema");

  const [examenes, setExamenes] = useState([]);

  const cargarExamenes = async () => {
    const data = await listarExamenes();

    // Filtrar solo los exámenes del tema
    const filtrados = data.filter(e => e.idTema?.idTema == idTema);

    setExamenes(filtrados);
  };

  useEffect(() => {
    cargarExamenes();
  }, []);

  const borrar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este examen?")) return;
    await eliminarExamen(id);
    cargarExamenes();
  };

  return (
    <div>
      <h1>Exámenes de: <strong>{nombreTema}</strong></h1>

      <button onClick={() => navigate(`/examenes/crear?idTema=${idTema}`)}>
        Crear Examen
      </button>

      <ul>
        {examenes.length === 0 && <p>No hay exámenes para este tema.</p>}

        {examenes.map(ex => (
          <li key={ex.id_examen}>
            <strong>{ex.titulo}</strong> – {ex.descripcion}  
            <br />

            <button onClick={() => navigate(`/examenes/editar/${ex.id_examen}?idTema=${idTema}`)}>
              Editar
            </button>

            <button onClick={() => borrar(ex.id_examen)}>
              Eliminar
            </button>

            <button onClick={() => navigate(`/preguntas?examen=${ex.id_examen}&titulo=${encodeURIComponent(ex.titulo)}`)}>Ver preguntas</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

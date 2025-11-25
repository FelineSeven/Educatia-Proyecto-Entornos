import { useEffect, useState } from "react";
import {
  listarExamenes,
  eliminarExamen,
  actualizarExamen
} from "../services/examenService";
import { useNavigate, useLocation } from "react-router-dom";

export default function ExamenList() {

  const [examenes, setExamenes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Leer ?idTema=xx
  const query = new URLSearchParams(location.search);
  const idTema = Number(query.get("idTema"));

  const cargarExamenes = async () => {
    const data = await listarExamenes();

    // Si viene idTema → filtrar
    if (idTema) {
      const filtrados = data.filter(ex => ex.idTema?.idTema === idTema);
      setExamenes(filtrados);
    } else {
      setExamenes(data);
    }
  };

  useEffect(() => {
    cargarExamenes();
  }, [idTema]);

  const editarExamen = async (examen) => {
  // ventana emergente para el título
    const nuevoTitulo = prompt("Nuevo título:", examen.titulo);
    if (nuevoTitulo === null) return;

  // ventana emergente para la descripción
    const nuevaDescripcion = prompt("Nueva descripción:", examen.descripcion);
    if (nuevaDescripcion === null) return;

  // ventana emergente para valor del examen
    const nuevoValor = prompt("Nuevo valor del examen:", examen.valorExamen);
    if (nuevoValor === null) return;

    await actualizarExamen(examen.id_examen, {
    titulo: nuevoTitulo,
    descripcion: nuevaDescripcion,
    valorExamen: Number(nuevoValor),
    idTema: { idTema: examen.idTema.idTema } // mantener tema actual
    });

    cargarExamenes(); // refresca la lista
    };
    


  const borrar = async (id) => {
    if (!window.confirm("¿Eliminar este examen?")) return;
    await eliminarExamen(id);
    cargarExamenes();
  };

  return (
    <div>
      <h1>Exámenes {idTema && `(Tema ${idTema})`}</h1>

      <button onClick={() => navigate(`/examenes/crear?idTema=${idTema}`)}>
        Crear Examen
      </button>

      <ul>
        {examenes.length === 0 && <p>No hay exámenes para este tema.</p>}

        {examenes.map((ex) => (
          <li key={ex.id_examen}>
            <strong>{ex.titulo}</strong> – {ex.descripcion}

            <button onClick={() => editarExamen(ex)}>Editar</button>

            <button onClick={() => borrar(ex.id_examen)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



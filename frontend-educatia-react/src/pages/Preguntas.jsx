import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { listarPreguntasPorExamen, editarPregunta } from "../services/preguntasService";
import PreguntasForm from "../components/PreguntasForm";
import PreguntasList from "../components/PreguntasList";

export default function Preguntas() {
  const [params] = useSearchParams();

  const idExamen = params.get("examen");
  const titulo = params.get("titulo");

  const [preguntas, setPreguntas] = useState([]);

  const cargar = async () => {
    const data = await listarPreguntasPorExamen(idExamen);
    setPreguntas(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  // Manejador para actualizar una pregunta (cuando se usa "Editar")
  const manejarRecargar = async (accion) => {
    if (!accion) {
      cargar();
      return;
    }

    if (accion.modo === "editar") {
      await editarPregunta(accion.pregunta);
    }

    cargar();
  };

  return (
    <div className="preguntas-container">
    <h1 className="tituloPagina">
      Preguntas del Examen: <strong>{titulo}</strong>
    </h1>

    <div className="preguntas-form-card">
      <PreguntasForm idExamen={idExamen} recargar={cargar} />
    </div>

    <hr />

    <div className="preguntas-list-card">
      <PreguntasList preguntas={preguntas} recargar={manejarRecargar} />
    </div>
  </div>

    /* ANTERIOR FUNCIONAL
    <div>
      <h1>Preguntas del examen: <strong>{titulo}</strong></h1>

      <PreguntasForm idExamen={idExamen} recargar={cargar} />

      <hr />

      <PreguntasList preguntas={preguntas} recargar={manejarRecargar} />
    </div>
    */
  );
}

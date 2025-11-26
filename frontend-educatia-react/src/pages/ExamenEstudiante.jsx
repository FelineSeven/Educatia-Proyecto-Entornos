import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { listarExamenes } from "../services/examenService";

export default function ExamenesEstudiante() {
  const { idTema } = useParams();
  const [examenes, setExamenes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarExamenes = async () => {
      const data = await listarExamenes();

      // Filtrar los exámenes del tema
      const filtrados = data.filter(ex => ex.idTema?.idTema == idTema);
      setExamenes(filtrados);
    };

    cargarExamenes();
  }, [idTema]);

  return (
    <div>
      <h2>Exámenes del Tema</h2>

      {examenes.length === 0 && <p>No hay exámenes disponibles.</p>}

      <ul>
        {examenes.map(ex => (
          <li key={ex.id_examen}>
            <strong>{ex.titulo}</strong>
            <p>{ex.descripcion}</p>

            <button onClick={() => navigate(`/examen-estudiante/${ex.id_examen}`)}>
              Comenzar examen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listarPreguntasPorExamen } from "../services/preguntasService";

export default function ExamenEstudiante() {
  const { idExamen } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState({});

  useEffect(() => {
    const cargarPreguntas = async () => {
      const data = await listarPreguntasPorExamen(idExamen);
      console.log("Aquí ",data)
      setPreguntas(data);
    };
    cargarPreguntas();
  }, [idExamen]);

  const toggleRespuesta = (idPregunta, idRespuesta) => {
    setRespuestasSeleccionadas(prev => ({
      ...prev,
      [idPregunta]: idRespuesta
    }));
  };

  const entregarExamen = () => {
    let correctas = 0;
    preguntas.forEach(p => {
      const seleccion = respuestasSeleccionadas[p.idPregunta];
      const correcta = p.respuestas.find(r => r.respuestaCorrecta)?.idRespuesta;
      if (seleccion === correcta) correctas++;
    });
    alert(`Acertaste ${correctas} de ${preguntas.length} preguntas`);
  };

  return (
    <div>
      <h2>Examen</h2>
      {preguntas.length === 0 && <p>No hay preguntas disponibles.</p>}
      {preguntas.map(p => (
        <div key={p.idPregunta} style={{ marginBottom: "15px" }}>
          <strong>{p.descripcion}</strong>
          <ul>
            {p.respuestas.map(r => (
              <li key={r.idRespuesta}>
                <label>
                  <input
                    type="radio"
                    name={`pregunta-${p.idPregunta}`}
                    checked={respuestasSeleccionadas[p.idPregunta] === r.idRespuesta}
                    onChange={() => toggleRespuesta(p.idPregunta, r.idRespuesta)}
                  />
                  {r.respuesta}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {preguntas.length > 0 && (
        <button onClick={entregarExamen}>Entregar Examen</button>
      )}
    </div>
  );
}
*/
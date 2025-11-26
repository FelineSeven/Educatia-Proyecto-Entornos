import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listarPreguntasPorExamen } from "../services/preguntasService";
import { listarRespuestasPorPregunta } from "../services/respuestasService";
import { buscarExamenPorId } from "../services/examenService";

export default function ExamenEstudianteReal() {
  const { idExamen } = useParams();

  const [examen, setExamen] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});

  useEffect(() => {
    const cargar = async () => {

      // Obtener examen
      const exam = await buscarExamenPorId(idExamen);
      setExamen(exam);

      // Obtener preguntas
      const preg = await listarPreguntasPorExamen(idExamen);

      // Cargar respuestas para cada pregunta
      const preguntasConRespuestas = [];
      for (const p of preg) {
        const resps = await listarRespuestasPorPregunta(p.idPregunta);
        preguntasConRespuestas.push({ ...p, respuestas: resps });
      }

      setPreguntas(preguntasConRespuestas);
    };

    cargar();
  }, [idExamen]);

  const seleccionarRespuesta = (idPregunta, idRespuesta) => {
    setRespuestas(prev => ({
      ...prev,
      [idPregunta]: idRespuesta
    }));
  };

  const entregar = () => {
    let correctas = 0;

    preguntas.forEach(p => {
      const seleccion = respuestas[p.idPregunta];
      const correcta = p.respuestas.find(r => r.respuestaCorrecta)?.idRespuesta;

      if (seleccion === correcta) correctas++;
    });

    alert(`Acertaste: ${correctas} de ${preguntas.length}`);
  };

  return (
    <div>
      <h1>{examen?.titulo}</h1>
      <p>{examen?.descripcion}</p>

      {preguntas.map(p => (
        <div key={p.idPregunta}>
          <h3>{p.descripcion}</h3>

          <ul>
            {p.respuestas.map(r => (
              <li key={r.idRespuesta}>
                <label>
                  <input
                    type="radio"
                    name={`preg-${p.idPregunta}`}
                    checked={respuestas[p.idPregunta] === r.idRespuesta}
                    onChange={() => seleccionarRespuesta(p.idPregunta, r.idRespuesta)}
                  />
                  {r.respuesta}
                  {""}
                  <small>({r.descripcion})</small>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {preguntas.length > 0 && (
        <button onClick={entregar}>Entregar examen</button>
      )}
    </div>
  );
}


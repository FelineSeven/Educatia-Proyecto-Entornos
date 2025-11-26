import React, { useState, useEffect } from "react";
import { eliminarPregunta } from "../services/preguntasService";
import {
  listarRespuestasPorPregunta,
  eliminarRespuesta,
  editarRespuesta
} from "../services/respuestasService";
import RespuestasForm from "./RespuestasForm";

export default function PreguntasList({ preguntas, recargar }) {
  const [respuestasPorPregunta, setRespuestasPorPregunta] = useState({});

  // Función para recargar respuestas de una pregunta específica
  const recargarRespuestas = async (idPregunta) => {
    const res = await listarRespuestasPorPregunta(idPregunta);
    setRespuestasPorPregunta((prev) => ({
      ...prev,
      [idPregunta]: res,
    }));
  };

  // Cargar respuestas al inicio para todas las preguntas
  useEffect(() => {
    preguntas.forEach((p) => recargarRespuestas(p.idPregunta));
  }, [preguntas]);

  const borrar = async (id) => {
    if (!window.confirm("¿Eliminar pregunta?")) return;
    await eliminarPregunta(id);
    recargar();
  };

  const borrarRespuesta = async (idRespuesta, idPregunta) => {
    if (!window.confirm("¿Eliminar respuesta?")) return;
    await eliminarRespuesta(idRespuesta);
    recargarRespuestas(idPregunta);
  };

  const editarRespuestaClick = async (r, idPregunta) => {
    const nuevaRespuesta = prompt("Editar respuesta:", r.respuesta);
    if (!nuevaRespuesta) return;
    const nuevaDescripcion = prompt("Editar descripción:", r.descripcion);
    if (nuevaDescripcion === null) return;
    const nuevaCorrecta = window.confirm("¿Es correcta?");
    
    await editarRespuesta({
      ...r,
      respuesta: nuevaRespuesta,
      descripcion: nuevaDescripcion,
      respuestaCorrecta: nuevaCorrecta
    });
    recargarRespuestas(idPregunta);
  };

  return (
    <ul>
      {preguntas.length === 0 && <p>No hay preguntas registradas.</p>}

      {preguntas.map((p) => (
        <li key={p.idPregunta}>
          <strong>{p.descripcion}</strong>
          <br />
          Valor: {p.valorPorcentaje}%
          <br />
          Opciones: {p.opcionesRespuesta}

          <br /><br />

          <button
            onClick={() => {
              const nuevaDescripcion = prompt("Nueva descripción:", p.descripcion);
              if (!nuevaDescripcion) return;

              const nuevoValor = prompt("Nuevo valor porcentual:", p.valorPorcentaje);
              if (nuevoValor === null || nuevoValor === "" || isNaN(nuevoValor)) {
                alert("Valor porcentual inválido");
                return;
              }

              const nuevasOpciones = prompt(
                "Nuevas opciones (separadas por coma):",
                p.opcionesRespuesta
              );
              if (!nuevasOpciones) return;

              recargar({
                modo: "editar",
                pregunta: {
                  ...p,
                  descripcion: nuevaDescripcion,
                  valorPorcentaje: Number(nuevoValor),
                  opcionesRespuesta: nuevasOpciones,
                },
              });
            }}
          >
            Editar
          </button>

          <button onClick={() => borrar(p.idPregunta)}>Eliminar</button>

          {/* ---------- Respuestas debajo de la pregunta ---------- */}
          <div style={{ marginLeft: "20px", marginTop: "10px" }}>
            <h4>Respuestas</h4>
            <RespuestasForm
              idPregunta={p.idPregunta}
              recargarRespuestas={() => recargarRespuestas(p.idPregunta)}
            />

            <ul>
              {(respuestasPorPregunta[p.idPregunta] || []).map((r) => (
                <li key={r.idRespuesta}>
                  {r.respuesta} ({r.descripcion}) {r.respuestaCorrecta && "✅"}{" "}
                  <button onClick={() => editarRespuestaClick(r, p.idPregunta)}>Editar</button>
                  <button onClick={() => borrarRespuesta(r.idRespuesta, p.idPregunta)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

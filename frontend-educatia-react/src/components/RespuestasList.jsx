import { useEffect, useState } from "react";
import { listarRespuestasPorPregunta, editarRespuesta, eliminarRespuesta } from "../services/respuestasService";

export default function RespuestasList({ idPregunta }) {
  const [respuestas, setRespuestas] = useState([]);

  const cargarRespuestas = async () => {
    const data = await listarRespuestasPorPregunta(idPregunta);
    setRespuestas(data);
  };

  useEffect(() => {
    cargarRespuestas();
  }, []);

  const manejarEditar = async (r) => {
    const nuevaResp = prompt("Respuesta:", r.respuesta);
    const nuevaDesc = prompt("Descripción:", r.descripcion);
    const correcta = window.confirm("Es correcta?");

    if (!nuevaResp || !nuevaDesc) return;

    await editarRespuesta({
      ...r,
      respuesta: nuevaResp,
      descripcion: nuevaDesc,
      respuestaCorrecta: correcta,
    });

    cargarRespuestas();
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("Eliminar respuesta?")) return;
    await eliminarRespuesta(id);
    cargarRespuestas();
  };

  return (
    <ul style={{ marginLeft: "20px" }}>
      {respuestas.length === 0 && <p>No hay respuestas.</p>}
      {respuestas.map((r) => (
        <li key={r.idRespuesta}>
          <strong>{r.respuesta}</strong> - {r.descripcion} - {r.respuestaCorrecta ? "✅" : "❌"}
          <button onClick={() => manejarEditar(r)}>Editar</button>
          <button onClick={() => manejarEliminar(r.idRespuesta)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

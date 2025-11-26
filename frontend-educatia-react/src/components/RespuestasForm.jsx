import { useState } from "react";
import { crearRespuesta } from "../services/respuestasService";

export default function RespuestasForm({ idPregunta, recargarRespuestas }) {
  const [respuesta, setRespuesta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [correcta, setCorrecta] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearRespuesta({
      idRespuesta: 0,
      respuesta,
      descripcion,
      respuestaCorrecta: correcta,
      idPregunta: { idPregunta } // solo el id es necesario
    });
    setRespuesta("");
    setDescripcion("");
    setCorrecta(false);
    recargarRespuestas();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Respuesta"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <label>
        Correcta
        <input
          type="checkbox"
          checked={correcta}
          onChange={(e) => setCorrecta(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

import { useState } from "react";
import { crearPregunta } from "../services/preguntasService";

export default function PreguntasForm({ idExamen, recargar }) {

  const [descripcion, setDescripcion] = useState("");
  const [valorPorcentaje, setValorPorcentaje] = useState("");
  const [opcionesRespuesta, setOpcionesRespuesta] = useState("");

  const enviar = async () => {
    if (!descripcion) return alert("Escribe la descripción de la pregunta.");
    if (!valorPorcentaje) return alert("Escribe el valor porcentual.");
    if (!opcionesRespuesta) return alert("Escribe las opciones separadas por coma.");

    const nuevaPregunta = {
      descripcion,
      valorPorcentaje: Number(valorPorcentaje),
      opcionesRespuesta,
      idExamen: { id_examen: Number(idExamen) } // NECESARIO para el backend
    };

    await crearPregunta(nuevaPregunta);

    // limpiar campos
    setDescripcion("");
    setValorPorcentaje("");
    setOpcionesRespuesta("");

    recargar();
  };

  return (
    <section id="crear-pregunta">
      <h3>Crear Pregunta</h3>

      <input
        type="text"
        placeholder="Descripción de la pregunta"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor porcentual"
        value={valorPorcentaje}
        onChange={e => setValorPorcentaje(e.target.value)}
      />

      <input
        type="text"
        placeholder="Opciones (separadas por coma)"
        value={opcionesRespuesta}
        onChange={e => setOpcionesRespuesta(e.target.value)}
      />

      <button onClick={enviar}>Agregar</button>
    </section>
  );
}

/*
import { useState } from "react";
import { crearPregunta } from "../services/preguntasService";

export default function PreguntasForm({ idExamen, recargar }) {
  const [descripcion, setDescripcion] = useState("");
  const [valorPorcentaje, setValorPorcentaje] = useState(0);
  const [opcionesRespuesta, setOpcionesRespuesta] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const pregunta = {
      descripcion,
      valorPorcentaje: Number(valorPorcentaje),
      opcionesRespuesta,
      idExamen: {
        id_examen: Number(idExamen)   // 🔥 AQUÍ ESTÁ LA CLAVE
      }
    };

    await crearPregunta(pregunta);

    setDescripcion("");
    setValorPorcentaje(0);
    setOpcionesRespuesta("");

    recargar();
  };

  return (
    <form onSubmit={enviar}>
      <h3>Crear Pregunta</h3>

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Valor %"
        value={valorPorcentaje}
        onChange={e => setValorPorcentaje(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Opciones (separadas por ';')"
        value={opcionesRespuesta}
        onChange={e => setOpcionesRespuesta(e.target.value)}
      />

      <button type="submit">Crear Pregunta</button>
    </form>
  );
}


import React, { useState } from "react";
import { crearPregunta } from "../services/preguntasService";

export default function PreguntasForm({ idExamen, recargar }) {
  const [enunciado, setEnunciado] = useState("");

  const guardar = async () => {
    if (!enunciado) return alert("Debes escribir una pregunta");

    await crearPregunta({
      enunciado,
      idExamen: { idExamen } // IMPORTANTE: así lo espera tu backend
    });

    setEnunciado("");
    recargar();
  };

  return (
    <div>
      <h3>Crear pregunta</h3>
      <input
        type="text"
        placeholder="Escribe una nueva pregunta"
        value={enunciado}
        onChange={e => setEnunciado(e.target.value)}
      />

      <button onClick={guardar}>Agregar</button>
    </div>
  );
}
*/
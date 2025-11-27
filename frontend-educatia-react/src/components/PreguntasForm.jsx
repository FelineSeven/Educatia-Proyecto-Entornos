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
    <section id="crear-pregunta" className="pregunta-form-card">
    <h2>Agregar Pregunta</h2>

    <input
      className="input-estandar"
      type="text"
      placeholder="Escriba la pregunta"
      value={descripcion}
      onChange={e => setDescripcion(e.target.value)}
    />

    <input
      className="input-estandar"
      type="number"
      placeholder="Valor porcentual"
      value={valorPorcentaje}
      onChange={e => setValorPorcentaje(e.target.value)}
    />

    <input
      className="input-estandar"
      type="text"
      placeholder="Opciones (separadas por coma)"
      value={opcionesRespuesta}
      onChange={e => setOpcionesRespuesta(e.target.value)}
    />

    <button className="btn-guardar" onClick={enviar}>
      Agregar
    </button>
  </section>

    /* VERSION FUNCIONAL SIN ESTILOS
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
    */
  );
}
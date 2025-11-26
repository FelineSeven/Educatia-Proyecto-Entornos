import React from "react";
import { eliminarPregunta } from "../services/preguntasService";

export default function PreguntasList({ preguntas, recargar }) {

  const borrar = async (id) => {
    if (!window.confirm("¿Eliminar pregunta?")) return;
    await eliminarPregunta(id);
    recargar();
  };

  return (
    <ul>
      {preguntas.length === 0 && <p>No hay preguntas registradas.</p>}

      {preguntas.map(p => (
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
                  opcionesRespuesta: nuevasOpciones
                }
              });
            }}
          /*
            onClick={() => {
              const nuevaDescripcion = prompt("Nueva descripción:", p.descripcion);
              if (!nuevaDescripcion) return;

              recargar({
                modo: "editar",
                pregunta: { ...p, descripcion: nuevaDescripcion }
              });
            }}*/
          >
            Editar
          </button>

          <button onClick={() => borrar(p.idPregunta)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

/*
import React from "react";
import { eliminarPregunta } from "../services/preguntasService";

export default function PreguntasList({ preguntas, recargar }) {

  const borrar = async (id) => {
    if (!window.confirm("¿Eliminar pregunta?")) return;
    await eliminarPregunta(id);
    recargar();
  };

  return (
    <ul>
      {preguntas.length === 0 && <p>No hay preguntas registradas.</p>}

      {preguntas.map(p => (
        <li key={p.idPregunta}>
          <strong>{p.descripcion}</strong>

          <button
            onClick={() => {
              const nuevaDescripcion = prompt("Nuevo enunciado:", p.descripcion);
              if (!nuevaDescripcion) return;

              recargar({
                modo: "editar",
                pregunta: { ...p, descripcion: nuevaDescripcion }
              });
            }}
          >
            Editar
          </button>

          <button onClick={() => borrar(p.idPregunta)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}


import React from "react";
import { eliminarPregunta } from "../services/preguntasService";

export default function PreguntasList({ preguntas, recargar }) {

  const borrar = async (id) => {
    if (!window.confirm("¿Eliminar pregunta?")) return;
    await eliminarPregunta(id);
    recargar();
  };

  return (
    <ul>
      {preguntas.length === 0 && <p>No hay preguntas registradas.</p>}

      {preguntas.map(p => (
        <li key={p.id_pregunta}>
          <strong>{p.enunciado}</strong>

          <button
            onClick={() => {
              const nuevoEnunciado = prompt("Nuevo enunciado:", p.enunciado);
              if (!nuevoEnunciado) return;

              recargar({
                modo: "editar",
                pregunta: { ...p, enunciado: nuevoEnunciado }
              });
            }}
          >
            Editar
          </button>

          <button onClick={() => borrar(p.id_pregunta)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
*/

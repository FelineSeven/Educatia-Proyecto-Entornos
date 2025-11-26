const API_URL = "http://localhost:8094/api/respuestas";

export const listarRespuestasPorPregunta = async (idPregunta) => {
  const res = await fetch(`${API_URL}/pregunta/${idPregunta}`);
  return res.json();
};

export const crearRespuesta = async (respuesta) => {
  await fetch(`${API_URL}/${respuesta.idPregunta.idPregunta}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(respuesta),
  });
};

export const editarRespuesta = async (respuesta) => {
  await fetch(`${API_URL}/${respuesta.idRespuesta}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(respuesta),
  });
};

export const eliminarRespuesta = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

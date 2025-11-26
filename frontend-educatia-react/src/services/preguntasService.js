const API_URL = "http://localhost:8094/api/preguntas";

export const listarPreguntasPorExamen = async (idExamen) => {
  const res = await fetch(`${API_URL}/examen/${idExamen}`);
  return res.json();
};

export const crearPregunta = async (pregunta) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pregunta)
  });
};

export const editarPregunta = async (pregunta) => {
  await fetch(`${API_URL}/${pregunta.idPregunta}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pregunta)
  });
};


export const eliminarPregunta = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};

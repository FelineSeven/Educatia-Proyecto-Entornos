const API_URL = "http://localhost:8094/api/examenes";

export const listarExamenes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const buscarExamenPorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const crearExamen = async (examen) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(examen)
  });
};

export const actualizarExamen = async (id, examen) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(examen)
  });
};

export const eliminarExamen = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};


const API_URL = "http://localhost:8094/api/cursos";

export const listarCursos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearCurso = async (curso) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(curso)
  });
};

export const editarCurso = async (curso) => {
  await fetch(`${API_URL}/${curso.idCurso || curso.id_curso}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(curso)
  });
};

export const eliminarCurso = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

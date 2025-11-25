const API_URL = "http://localhost:8094/api/temas";

// Listar todos los temas o por curso (si pasas idCurso)
export const listarTemas = async (idCurso = null) => {
  const url = idCurso ? `${API_URL}/curso/${idCurso}` : API_URL;
  const res = await fetch(url);
  return res.json();
};

export const crearTema = async (tema) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tema)
  });
};

export const editarTema = async (tema) => {
  const id = tema.idTema || tema.id_tema;
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tema)
  });
};

export const eliminarTema = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};


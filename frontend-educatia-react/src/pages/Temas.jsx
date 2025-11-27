// src/pages/Temas.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Temas = () => {
  const [temas, setTemas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const idCurso = searchParams.get("id");

  const urlBase = "http://localhost:8094/api/temas";

  useEffect(() => {
    if (idCurso) cargarTemas();
    else alert("No se ha proporcionado un curso válido.");
  }, [idCurso]);

  const cargarTemas = async () => {
    try {
      const res = await fetch(`${urlBase}/curso/${idCurso}`);
      const data = await res.json();
      setTemas(data);
    } catch (error) {
      console.error("Error al cargar temas:", error);
    }
  };

  const crearTema = async () => {
    if (!titulo || !descripcion) return alert("Todos los campos son obligatorios");
    try {
      await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descripcion, idCurso: { idCurso: parseInt(idCurso) } }),
      });
      setTitulo("");
      setDescripcion("");
      cargarTemas();
    } catch (error) {
      console.error("Error al crear tema:", error);
    }
  };

  const editarTema = async (tema) => {
  const nuevoTitulo = prompt("Nuevo título:", tema.titulo);
  if (!nuevoTitulo) return;

  const nuevaDescripcion = prompt("Nueva descripción:", tema.descripcion);
  if (nuevaDescripcion === null) return;

  await fetch(`${urlBase}/${tema.idTema}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...tema,
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion
    })
  });

  cargarTemas();
  };

  const eliminarTema = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este tema?")) return;
    await fetch(`${urlBase}/${id}`, { method: "DELETE" });
    cargarTemas();
  };

  const irAExamenes = (idTema) => {
    navigate(`/examenes?idTema=${idTema}`);
  };

  return (
  <div className="temas-page">
    <h1 className="tituloPagina">Temas del Curso</h1>

    {/* FORMULARIO */}
    <div className="tema-form">
      <h3>Agregar Tema</h3>
      <input
        type="text"
        placeholder="Título del tema"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descripción del tema"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={crearTema}>Crear Tema</button>
    </div>

    {/* TABLA */}
    <div className="tabla-temas-container">
      <table className="tabla-temas">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {temas.map((tema) => (
            <tr key={tema.idTema}>
              <td>{tema.titulo}</td>
              <td>{tema.descripcion}</td>
              <td className="acciones">
                <button className="btn-examen" onClick={() => irAExamenes(tema.idTema)}>Ver Exámenes</button>
                <button className="btn-editar" onClick={() => editarTema(tema)}>Editar</button>
                <button className="btn-eliminar" onClick={() => eliminarTema(tema.idTema)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

    /*
    <div>
      <h1>Temas del curso</h1>
      <div>
        <input
          type="text"
          placeholder="Título del tema"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descripción del tema"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button onClick={crearTema}>Crear Tema</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {temas.map((tema) => (
            <tr key={tema.idTema}>
              <td>{tema.idTema}</td>
              <td>{tema.titulo}</td>
              <td>{tema.descripcion}</td>
              <td>
                <button onClick={() => irAExamenes(tema.idTema)}>Exámenes</button>
                <button onClick={() => editarTema(tema)}>Editar</button>
                <button onClick={() => eliminarTema(tema.idTema)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    */
);
};

export default Temas;

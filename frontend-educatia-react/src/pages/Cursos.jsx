// src/pages/Cursos.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editarCurso } from "../services/cursosService";
import "../styles/cards.css";

const Cursos = () => {
  const API_URL = "http://localhost:8094/api/cursos";
  const [cursos, setCursos] = useState([]);
  const [nombreCurso, setNombreCurso] = useState("");
  const [descripcionCurso, setDescripcionCurso] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    listarCursos();
  }, []);

  const listarCursos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCursos(data);
  };

  const crearCurso = async () => {
    if (!nombreCurso) return alert("Debes escribir un nombre para el curso.");
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombreAsignatura: nombreCurso, descripcion: descripcionCurso }),
    });
    setNombreCurso("");
    setDescripcionCurso("");
    listarCursos();
  };

  const editarCursoHandler = async (curso) => {
  const nuevoNombre = prompt("Nuevo nombre del curso:", curso.nombreAsignatura);
  if (!nuevoNombre) return;

  const nuevaDescripcion = prompt("Nueva descripción del curso:", curso.descripcion);
  if (nuevaDescripcion === null) return;

  await editarCurso({ 
    ...curso, 
    nombreAsignatura: nuevoNombre, 
    descripcion: nuevaDescripcion 
  });

  listarCursos(); // refresca la lista
  };


  const eliminarCurso = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este curso?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    listarCursos();
  };

  const verTemas = (idCurso, nombre) => {
    navigate(`/temas?id=${idCurso}&nombre=${encodeURIComponent(nombre)}`);
  };

  return (
    <div>
    <h1 className ="tituloPagina">¡Bienvenid@ a la administración de tus Cursos!</h1>

    {/* --- FORMULARIO PARA CREAR CURSO --- */}
    <div className="card form-card">
      <h3>Crear Curso</h3>

      <input
        type="text"
        placeholder="Nombre del curso"
        value={nombreCurso}
        onChange={(e) => setNombreCurso(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción del curso"
        value={descripcionCurso}
        onChange={(e) => setDescripcionCurso(e.target.value)}
      />

      <button onClick={crearCurso}>Agregar Curso</button>
    </div>

    {/* --- LISTADO DE CURSOS --- */}
    <div className="cursos-container">
      {cursos.map((curso) => (
        <div className="card" key={curso.idCurso || curso.id_curso}>

          <div className="card-content">
          <div className="card-title">{curso.nombreAsignatura}</div>
          <p>{curso.descripcion}</p>
          </div>

          <div className="card-buttons">
            <button
              onClick={() =>
                verTemas(
                  curso.idCurso || curso.id_curso,
                  curso.nombreAsignatura
                )
              }
            >
              Ver Temas
            </button>

            <button className= "edit" onClick={() => editarCursoHandler(curso)}>
              Editar
            </button>

            <button
              className="delete"
              onClick={() =>
                eliminarCurso(curso.idCurso || curso.id_curso)
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

    /*
    <div>
      <h1>Cursos</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre del curso"
          value={nombreCurso}
          onChange={(e) => setNombreCurso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del curso"
          value={descripcionCurso}
          onChange={(e) => setDescripcionCurso(e.target.value)}
        />
        <button onClick={crearCurso}>Agregar</button>
      </div>

      <ul>
        {cursos.map((curso) => (
          <li key={curso.idCurso || curso.id_curso}>
            <strong>{curso.nombreAsignatura}</strong> - {curso.descripcion}
            <button onClick={() => verTemas(curso.idCurso || curso.id_curso, curso.nombreAsignatura)}>
              Ver Temas
            </button>
            <button onClick={() => editarCursoHandler(curso)}>Editar</button>
            <button onClick={() => eliminarCurso(curso.idCurso || curso.id_curso)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    */
  );
};

export default Cursos;


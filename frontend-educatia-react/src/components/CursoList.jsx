import React from 'react';
import { editarCurso as editarAPI, eliminarCurso as eliminarAPI } from '../services/cursosService';
import { useNavigate } from 'react-router-dom';

function CursoList({ cursos, recargarCursos }) {
  const navigate = useNavigate();

  const editarCurso = async (curso) => {
    const nuevoNombre = prompt("Nuevo nombre del curso:", curso.nombreAsignatura);
    if (!nuevoNombre) return;
    const nuevaDescripcion = prompt("Nueva descripción del curso:", curso.descripcion);
    if (nuevaDescripcion === null) return;
    await editarAPI({ ...curso, nombreAsignatura: nuevoNombre, descripcion: nuevaDescripcion });
    recargarCursos();
  };

  const eliminarCurso = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!window.confirm("¿Seguro que deseas eliminar este curso?")) return;
    await eliminarAPI(id);
    recargarCursos();
  };

  return (
    <ul>
      {cursos.map(curso => (
        <li key={curso.idCurso || curso.id_curso}>
          <strong>{curso.nombreAsignatura || "Sin nombre"}</strong><br/>
          <small>{curso.descripcion || "Sin descripción"}</small><br/>
          <button onClick={() => editarCurso(curso)}>Editar</button>
          <button onClick={() => eliminarCurso(curso.idCurso || curso.id_curso)}>Eliminar</button>
          <button onClick={() => navigate(`/temas/${curso.idCurso || curso.id_curso}`)}>Ver Temas</button>
        </li>
      ))}
    </ul>
  );
}

export default CursoList;


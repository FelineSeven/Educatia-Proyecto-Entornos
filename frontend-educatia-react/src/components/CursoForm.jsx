import React, { useState } from 'react';
import { crearCurso } from '../services/cursosService';

function CursoForm({ recargarCursos }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async () => {
    if(!nombre) return alert("Debes escribir un nombre para el curso.");
    await crearCurso({ nombreAsignatura: nombre, descripcion });
    setNombre('');
    setDescripcion('');
    recargarCursos();
  };

  return (
    <section id="crear-curso">
      <h3>Crear nuevo curso</h3>
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre del curso" />
      <input type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripción del curso" />
      <button onClick={handleSubmit}>Agregar</button>
    </section>
  );
}

export default CursoForm;

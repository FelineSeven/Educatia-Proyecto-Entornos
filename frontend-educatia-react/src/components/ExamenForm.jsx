import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  buscarExamenPorId,
  crearExamen,
  actualizarExamen
} from "../services/examenService";

// Función para leer query params como ?idTema=21
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ExamenForm() {

  const { id } = useParams(); // ID del examen si estás editando
  const query = useQuery();
  const idTema = query.get("idTema"); // ← capturamos ?idTema=21

  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    valorExamen: ""
  });

  // ================================
  // CARGAR EXAMEN (si es edición)
  // ================================
  useEffect(() => {
    if (id) {
      buscarExamenPorId(id).then((data) => {
        setForm({
          titulo: data.titulo,
          descripcion: data.descripcion,
          valorExamen: data.valorExamen,
          idTema: data.idTema?.idTema || ""
        });
      });
    }
  }, [id]);

  // ================================
  // MANEJAR CAMBIOS
  // ================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ================================
  // GUARDAR / EDITAR EXAMEN
  // ================================
  const guardar = async (e) => {
    e.preventDefault();

    const payload = {
      titulo: form.titulo,
      descripcion: form.descripcion,
      valorExamen: Number(form.valorExamen),
      idTema: { idTema: Number(idTema) } // ← SE ENVÍA EL TEMA CORRECTO
    };

    if (id) {
      await actualizarExamen(id, payload);
    } else {
      await crearExamen(payload);
    }

    // Regresar a la lista de exámenes del mismo tema
    navigate(`/examenes?idTema=${idTema}`);
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Examen" : "Crear Examen"}</h2>

      <form onSubmit={guardar}>

        <input
          className="form-control mt-3"
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mt-3"
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mt-3"
          name="valorExamen"
          placeholder="Valor del examen"
          value={form.valorExamen}
          onChange={handleChange}
          required
        />

        <button className="btn btn-success mt-3">Guardar</button>
      </form>
    </div>
  );
}



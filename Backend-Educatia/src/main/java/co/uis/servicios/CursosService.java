/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.uis.modelos.Cursos;
import co.uis.repositorios.CursosRepositorio;
/**
 *
 * @author Portatil
 */
@Service
public class CursosService {
    
    @Autowired
    private CursosRepositorio cursosRepositorio;

    public List<Cursos> listarCursos() {
        return cursosRepositorio.findAll();
    }

    public Optional<Cursos> obtenerCursoPorId(int id) {
        return cursosRepositorio.findById(id);
    }

    public Cursos crearCurso(Cursos curso) {
        return cursosRepositorio.save(curso);
    }

    public Cursos actualizarCurso(int id, Cursos curso) {
        return cursosRepositorio.findById(id).map(c -> {
            c.setNombreAsignatura(curso.getNombreAsignatura());
            c.setDescripcion(curso.getDescripcion());
            return cursosRepositorio.save(c);
        }).orElseThrow(() -> new RuntimeException("Curso no encontrado con ID: " + id));
    }

    public void eliminarCurso(int id) {
        cursosRepositorio.deleteById(id);
    }
}

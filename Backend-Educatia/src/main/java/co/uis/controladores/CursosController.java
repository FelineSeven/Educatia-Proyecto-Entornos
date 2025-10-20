/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.controladores;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.uis.modelos.Cursos;
import co.uis.servicios.CursosService;
/**
 *
 * @author Portatil
 */
@RestController
@RequestMapping("/api/cursos")
@CrossOrigin(origins = "*")
public class CursosController {
    
    @Autowired
    private CursosService cursosService;

    @GetMapping
    public List<Cursos> listarCursos() {
        return cursosService.listarCursos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cursos> obtenerCursoPorId(@PathVariable int id) {
        return cursosService.obtenerCursoPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Cursos> crearCurso(@RequestBody Cursos curso) {
        Cursos nuevo = cursosService.crearCurso(curso);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cursos> actualizarCurso(@PathVariable int id, @RequestBody Cursos curso) {
        try {
            Cursos actualizado = cursosService.actualizarCurso(id, curso);
            return ResponseEntity.ok(actualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCurso(@PathVariable int id) {
        cursosService.eliminarCurso(id);
        return ResponseEntity.noContent().build();
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.controladores;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.uis.modelos.Preguntas;
import co.uis.servicios.PreguntasService;
/**
 *
 * @author Carlos
 */
@RestController
@RequestMapping("/api/preguntas")
@CrossOrigin(origins = "*")
public class PreguntasController {
    @Autowired
    private PreguntasService preguntasService;

    @GetMapping
    public List<Preguntas> listar() {
        return preguntasService.listar();
    }

    // Listar preguntas por idExamen
    @GetMapping("/examen/{idExamen}")
    public List<Preguntas> listarPorExamen(@PathVariable int idExamen) {
        return preguntasService.listarPorExamen(idExamen);
    }

    @GetMapping("/{id}")
    public Preguntas buscarPorId(@PathVariable int id) {
        return preguntasService.buscarPorId(id);
    }

    @PostMapping
    public Preguntas guardar(@RequestBody Preguntas pregunta) {
        return preguntasService.guardar(pregunta);
    }

    @PutMapping("/{id}")
    public Preguntas actualizar(@PathVariable int id, @RequestBody Preguntas pregunta) {
        return preguntasService.actualizar(id, pregunta);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable int id) {
        preguntasService.eliminar(id);
    }

}

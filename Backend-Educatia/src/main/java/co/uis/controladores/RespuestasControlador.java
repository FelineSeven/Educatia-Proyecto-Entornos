/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.uis.modelos.Respuestas;
import co.uis.servicios.RespuestasServicio;
/**
 *
 * @author Portatil
 */
@RestController
@RequestMapping("/api/respuestas")
@CrossOrigin(origins = "*")
public class RespuestasControlador {
    @Autowired
    private RespuestasServicio servicio;

    @GetMapping("/pregunta/{idPregunta}")
    public List<Respuestas> listar(@PathVariable int idPregunta) {
        return servicio.listarPorPregunta(idPregunta);
    }

    @PostMapping("/{idPregunta}")
    public Respuestas crear(@RequestBody Respuestas r, @PathVariable int idPregunta) {
        return servicio.crear(r, idPregunta);
    }

    @PutMapping("/{id}")
    public Respuestas editar(@RequestBody Respuestas r, @PathVariable int id) {
        r.setIdRespuesta(id);
        return servicio.editar(r);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable int id) {
        servicio.eliminar(id);
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.uis.modelos.Examenes;
import co.uis.servicios.ExamenesService;
/**
 *
 * @author Portatil
 */
@RestController
@RequestMapping("/api/examenes")
@CrossOrigin(origins = "*")
public class ExamenesController {
    
    @Autowired
    private ExamenesService examenesService;

    @GetMapping
    public List<Examenes> listar() {
        return examenesService.listar();
    }

    @GetMapping("/{id}")
    public Examenes buscarPorId(@PathVariable int id) {
        return examenesService.buscarPorId(id);
    }

    @PostMapping
    public Examenes guardar(@RequestBody Examenes examen) {
        return examenesService.guardar(examen);
    }

    @PutMapping("/{id}")
    public Examenes actualizar(@PathVariable int id, @RequestBody Examenes examen) {
        return examenesService.actualizar(id, examen);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable int id) {
        examenesService.eliminar(id);
    }
}

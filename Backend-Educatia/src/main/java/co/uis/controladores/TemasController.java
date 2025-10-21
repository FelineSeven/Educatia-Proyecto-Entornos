/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.uis.modelos.Temas;
import co.uis.servicios.TemasService;
/**
 *
 * @author Portatil
 */
@RestController
@RequestMapping("/api/temas")
@CrossOrigin(origins = "*")
public class TemasController {
    
    @Autowired
    private TemasService temasService;

    @GetMapping
    public List<Temas> listar() {
        return temasService.listar();
    }

    @GetMapping("/{id}")
    public Temas buscarPorId(@PathVariable int id) {
        return temasService.buscarPorId(id);
    }
    
    @GetMapping("/curso/{idCurso}")
    public List<Temas> buscarPorIdCurso(@PathVariable int idCurso) {
        return temasService.buscarPorIdCurso(idCurso);
    }

    @PostMapping
    public Temas guardar(@RequestBody Temas tema) {
        return temasService.guardar(tema);
    }

    @PutMapping("/{id}")
    public Temas actualizar(@PathVariable int id, @RequestBody Temas tema) {
        return temasService.actualizar(id, tema);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable int id) {
        temasService.eliminar(id);
    }
}

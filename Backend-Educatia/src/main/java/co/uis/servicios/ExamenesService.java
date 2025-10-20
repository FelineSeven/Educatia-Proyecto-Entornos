/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.servicios;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.uis.modelos.Examenes;
import co.uis.repositorios.ExamenesRepositorio;
/**
 *
 * @author Portatil
 */
@Service
public class ExamenesService {
    @Autowired
    private ExamenesRepositorio examenesRepositorio;

    public List<Examenes> listar() {
        return examenesRepositorio.findAll();
    }

    public Examenes guardar(Examenes examen) {
        return examenesRepositorio.save(examen);
    }

    public Examenes buscarPorId(int id) {
        return examenesRepositorio.findById(id).orElse(null);
    }

    public Examenes actualizar(int id, Examenes examenActualizado) {
        Examenes existente = buscarPorId(id);
        if (existente != null) {
            existente.setTitulo(examenActualizado.getTitulo());
            existente.setDescripcion(examenActualizado.getDescripcion());
            existente.setValorExamen(examenActualizado.getValorExamen());
            existente.setIdTema(examenActualizado.getIdTema());
            return examenesRepositorio.save(existente);
        }
        return null;
    }

    public void eliminar(int id) {
        examenesRepositorio.deleteById(id);
    }
}

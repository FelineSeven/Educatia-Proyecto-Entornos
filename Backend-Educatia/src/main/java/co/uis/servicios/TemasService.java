/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.servicios;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.uis.modelos.Temas;
import co.uis.repositorios.TemasRepositorio;
/**
 *
 * @author Portatil
 */
@Service
public class TemasService {
    
    @Autowired
    private TemasRepositorio temasRepositorio;

    public List<Temas> listar() {
        return temasRepositorio.findAll();
    }

    public Temas guardar(Temas tema) {
        return temasRepositorio.save(tema);
    }

    public Temas buscarPorId(int id) {
        return temasRepositorio.findById(id).orElse(null);
    }
    
    public List<Temas> buscarPorIdCurso(int idCurso) {
        return temasRepositorio.findByIdCurso(idCurso);
    }

    public Temas actualizar(int id, Temas temaActualizado) {
        Temas existente = buscarPorId(id);
        if (existente != null) {
            existente.setTitulo(temaActualizado.getTitulo());
            existente.setDescripcion(temaActualizado.getDescripcion());
            existente.setIdCurso(temaActualizado.getIdCurso());
            return temasRepositorio.save(existente);
        }
        return null;
    }

    public void eliminar(int id) {
        temasRepositorio.deleteById(id);
    }
    
}

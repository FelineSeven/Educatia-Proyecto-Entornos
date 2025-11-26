/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.uis.modelos.Preguntas;
import co.uis.repositorios.PreguntasRepository;
/**
 *
 * @author Carlos
 */
@Service
public class PreguntasService {
    @Autowired
    private PreguntasRepository preguntasRepository;

    public List<Preguntas> listar() {
        return preguntasRepository.findAll();
    }

    public Preguntas guardar(Preguntas pregunta) {
        return preguntasRepository.save(pregunta);
    }

    public Preguntas buscarPorId(int id) {
        return preguntasRepository.findById(id).orElse(null);
    }

    public List<Preguntas> listarPorExamen(int idExamen) {
        return preguntasRepository.listarPorExamen(idExamen);
       }

    public Preguntas actualizar(int id, Preguntas nuevaPregunta) {
        Preguntas existente = buscarPorId(id);

        if (existente != null) {
            existente.setDescripcion(nuevaPregunta.getDescripcion());
            existente.setValorPorcentaje(nuevaPregunta.getValorPorcentaje());
            existente.setOpcionesRespuesta(nuevaPregunta.getOpcionesRespuesta());
            existente.setIdExamen(nuevaPregunta.getIdExamen());

            return preguntasRepository.save(existente);
        }

        return null;
    }

    public void eliminar(int id) {
        preguntasRepository.deleteById(id);
    }
}

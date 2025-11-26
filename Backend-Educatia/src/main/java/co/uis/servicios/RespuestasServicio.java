/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.uis.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.uis.modelos.Preguntas;
import co.uis.modelos.Respuestas;
import co.uis.repositorios.PreguntasRepository;
import co.uis.repositorios.RespuestasRepositorio;
/**
 *
 * @author Portatil
 */
@Service
public class RespuestasServicio {
    
    @Autowired
    private RespuestasRepositorio respuestasRepositorio;

    @Autowired
    private PreguntasRepository preguntasRepositorio;

    public List<Respuestas> listarPorPregunta(int idPregunta) {
        return respuestasRepositorio.findByIdPregunta_IdPregunta(idPregunta);
    }

    public Respuestas crear(Respuestas r, int idPregunta) {
        Preguntas p = preguntasRepositorio.findById(idPregunta)
                .orElseThrow(() -> new RuntimeException("Pregunta no encontrada"));
        r.setIdPregunta(p);
        return respuestasRepositorio.save(r);
    }

    public Respuestas editar(Respuestas r) {
        return respuestasRepositorio.save(r);
    }

    public void eliminar(int id) {
        respuestasRepositorio.deleteById(id);
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package co.uis.repositorios;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import co.uis.modelos.Respuestas;
/**
 *
 * @author Portatil
 */
public interface RespuestasRepositorio extends JpaRepository<Respuestas, Integer> {
    List<Respuestas> findByIdPregunta_IdPregunta(int idPregunta);
}

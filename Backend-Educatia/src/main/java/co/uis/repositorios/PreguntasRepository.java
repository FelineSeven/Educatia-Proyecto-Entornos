/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package co.uis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import co.uis.modelos.Preguntas;
import java.util.List;
/**
 *
 * @author Carlos
 */
public interface PreguntasRepository extends JpaRepository<Preguntas, Integer> {
    @Query(value = "SELECT * FROM preguntas WHERE id_examen = :idExamen", nativeQuery = true)
    List<Preguntas> listarPorExamen(@Param("idExamen") int idExamen);

}

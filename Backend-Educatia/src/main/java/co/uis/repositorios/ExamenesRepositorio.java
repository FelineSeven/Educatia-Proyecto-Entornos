/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package co.uis.repositorios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import co.uis.modelos.Examenes;

/**
 *
 * @author Portatil
 */
@Repository
public interface ExamenesRepositorio extends JpaRepository<Examenes, Integer>{
    
}

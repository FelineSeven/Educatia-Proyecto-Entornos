/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package co.uis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import co.uis.modelos.Usuarios;
/**
 *
 * @author Portatil
 */
public interface UsuarioRepositorio extends JpaRepository<Usuarios, Integer> {
    
}

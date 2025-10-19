package co.uis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.uis.modelos.Cursos;

public interface CursosRepositorio extends JpaRepository<Cursos, Integer>{
	
}

package co.uis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.uis.modelos.Cursos;

@Repository
public interface CursosRepositorio extends JpaRepository<Cursos, Integer>{
	
}

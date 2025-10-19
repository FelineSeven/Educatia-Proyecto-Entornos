package co.uis.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import co.uis.modelos.Grupos;

public interface GruposRepositorio extends JpaRepository<Grupos, Integer>{
	@Query("select g from Grupos g where g.id_profesor.id_profesor = ?1")
	List<Grupos> findById_profesor( int idProfesor);
	
	
}

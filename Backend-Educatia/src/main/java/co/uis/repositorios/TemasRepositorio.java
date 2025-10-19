package co.uis.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.uis.modelos.Temas;

public interface TemasRepositorio extends JpaRepository<Temas,Integer>{
	@Query("select t from Temas t where t.id_curso.id_curso = ?1")
	List<Temas> findByIdCurso(int id);
}

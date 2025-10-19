package co.uis.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import co.uis.modelos.Estudiantes;
import co.uis.modelos.GruposEstudiantes;

public interface GruposEstudiantesRepositorio extends JpaRepository<GruposEstudiantes, Integer>{
	@Query("SELECT ge.id_estudiante FROM GruposEstudiantes ge WHERE ge.id_grupo.id_grupo = ?1")
    List<Estudiantes> findEstudiantesByIdGrupo( int idGrupo);
}

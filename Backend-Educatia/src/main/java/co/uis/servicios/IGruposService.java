package co.uis.servicios;

import java.util.List;

import co.uis.modelos.Cursos;
import co.uis.modelos.Estudiantes;
import co.uis.modelos.Grupos;
import co.uis.modelos.Temas;

public interface IGruposService {
	List<Grupos> listarGruposProfesor(int idProfesor);
	List<Estudiantes> listarEstudiantesGrupo(int idGrupo);
	List<Temas> listarTemasCurso(int idCurso);
}

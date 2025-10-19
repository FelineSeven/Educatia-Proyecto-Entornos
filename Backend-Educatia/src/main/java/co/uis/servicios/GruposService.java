package co.uis.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.uis.modelos.Estudiantes;
import co.uis.modelos.Grupos;
import co.uis.modelos.Temas;
import co.uis.repositorios.GruposEstudiantesRepositorio;
import co.uis.repositorios.GruposRepositorio;
import co.uis.repositorios.TemasRepositorio;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class GruposService implements IGruposService {
	@Autowired
	GruposRepositorio gruposR;
	@Autowired
	GruposEstudiantesRepositorio gruposER;
	@Autowired
	TemasRepositorio temasR;
	
	@Override
	public List<Grupos> listarGruposProfesor(int idProfesor){
		return gruposR.findById_profesor(idProfesor);
	}
	
	@Override
	public List<Estudiantes> listarEstudiantesGrupo(int idGrupo){
		return gruposER.findEstudiantesByIdGrupo(idGrupo);
	}
	
	@Override
	public List<Temas> listarTemasCurso(int idCurso){
		return temasR.findByIdCurso(idCurso);
	}
}

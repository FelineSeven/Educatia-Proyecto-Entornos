package co.uis.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.uis.modelos.Estudiantes;
import co.uis.modelos.Grupos;
import co.uis.modelos.Temas;
import co.uis.servicios.GruposService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/grupos")
public class GruposController {
	@Autowired
	GruposService gruposS;
	
	
	@GetMapping("/listar/{idProfesor}")
	public List<Grupos> listarPorIdProfesor(@PathVariable int idProfesor) {
		return gruposS.listarGruposProfesor(idProfesor);
	}
	
	@GetMapping("listarEstudiantes/{idGrupo}")
	public List<Estudiantes> listarEstudiantesGrupo(@PathVariable int idGrupo){
		return gruposS.listarEstudiantesGrupo(idGrupo);
	}
	
	@GetMapping("listarTemas/{idCurso}")
	public List<Temas> listarTemasCurso(@PathVariable int idCurso){
		return gruposS.listarTemasCurso(idCurso);
	}
}

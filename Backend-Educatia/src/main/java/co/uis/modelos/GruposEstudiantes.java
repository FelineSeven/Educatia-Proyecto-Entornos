package co.uis.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name= GruposEstudiantes.TABLE_NAME)
public class GruposEstudiantes {
	public static final String TABLE_NAME = "grupos_estudiantes";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "id_estudiante")
	private Estudiantes id_estudiante;
	
	@ManyToOne
	@JoinColumn(name = "id_grupo")
	private Grupos id_grupo;

	public GruposEstudiantes(int id, Estudiantes idEstudiante, Grupos idGrupo) {
		super();
		this.id = id;
		this.id_estudiante = idEstudiante;
		this.id_grupo = idGrupo;
	}

	public GruposEstudiantes() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Estudiantes getIdEstudiante() {
		return id_estudiante;
	}

	public void setIdEstudiante(Estudiantes idEstudiante) {
		this.id_estudiante = idEstudiante;
	}

	public Grupos getIdGrupo() {
		return id_grupo;
	}

	public void setIdGrupo(Grupos idGrupo) {
		this.id_grupo = idGrupo;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

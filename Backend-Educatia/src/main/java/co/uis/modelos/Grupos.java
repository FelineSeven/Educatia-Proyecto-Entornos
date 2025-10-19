package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name= Grupos.TABLE_NAME)
public class Grupos {
	public static final String TABLE_NAME = "grupos";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_grupo;
	
	@Column(name = "horario")
	private String horario;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(name = "id_profesor")
	private Profesores id_profesor;
	
	@ManyToOne
	@JoinColumn(name = "id_curso")
	private Cursos id_curso;

	public Grupos(int id_grupo, String horario, String descripcion, Profesores id_profesor, Cursos id_curso) {
		super();
		this.id_grupo = id_grupo;
		this.horario = horario;
		this.descripcion = descripcion;
		this.id_profesor = id_profesor;
		this.id_curso = id_curso;
	}

	public Grupos() {
		
	}

	public int getId_grupo() {
		return id_grupo;
	}

	public void setId_grupo(int id_grupo) {
		this.id_grupo = id_grupo;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Profesores getId_profesor() {
		return id_profesor;
	}

	public void setId_profesor(Profesores id_profesor) {
		this.id_profesor = id_profesor;
	}

	public Cursos getId_curso() {
		return id_curso;
	}

	public void setId_curso(Cursos id_curso) {
		this.id_curso = id_curso;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
	
}

package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= Cursos.TABLE_NAME)
public class Cursos {
	public static final String TABLE_NAME = "cursos";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_curso;
	
	@Column(name = "nombre_asignatura")
	private String nombreAsignatura;
	
	@Column(name = "descripcion")
	private String descripcion;

	public Cursos(int idCurso, String nombreAsignatura, String descripcion) {
		super();
		this.id_curso = idCurso;
		this.nombreAsignatura = nombreAsignatura;
		this.descripcion = descripcion;
	}

	public Cursos() {
	}

	public int getIdCurso() {
		return id_curso;
	}

	public void setIdCurso(int idCurso) {
		this.id_curso = idCurso;
	}

	public String getNombreAsignatura() {
		return nombreAsignatura;
	}

	public void setNombreAsignatura(String nombreAsignatura) {
		this.nombreAsignatura = nombreAsignatura;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
	
}

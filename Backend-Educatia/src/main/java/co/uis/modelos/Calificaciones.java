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
@Table(name= Calificaciones.TABLE_NAME)
public class Calificaciones {
	public static final String TABLE_NAME = "calificaciones";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_calificacion;
	
	@Column(name = "calificacion")
	private double calificacion;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(name = "id_examen")
	private Examenes idExamen;
	
	@ManyToOne
	@JoinColumn(name = "id_estudiante")
	private Estudiantes idEstudiante;

	public Calificaciones(int id_calificacion, double calificacion, String descripcion, Examenes idExamen,
			Estudiantes idEstudiante) {
		super();
		this.id_calificacion = id_calificacion;
		this.calificacion = calificacion;
		this.descripcion = descripcion;
		this.idExamen = idExamen;
		this.idEstudiante = idEstudiante;
	}
	
	public Calificaciones() {}

	public int getId_calificacion() {
		return id_calificacion;
	}

	public void setId_calificacion(int id_calificacion) {
		this.id_calificacion = id_calificacion;
	}

	public double getCalificacion() {
		return calificacion;
	}

	public void setCalificacion(double calificacion) {
		this.calificacion = calificacion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Examenes getIdExamen() {
		return idExamen;
	}

	public void setIdExamen(Examenes idExamen) {
		this.idExamen = idExamen;
	}

	public Estudiantes getIdEstudiante() {
		return idEstudiante;
	}

	public void setIdEstudiante(Estudiantes idEstudiante) {
		this.idEstudiante = idEstudiante;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
	
}

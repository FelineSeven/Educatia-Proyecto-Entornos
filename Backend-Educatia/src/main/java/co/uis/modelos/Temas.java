package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= Temas.TABLE_NAME)
public class Temas {
	public static final String TABLE_NAME = "temas";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_tema;
	
	@ManyToOne
	@JoinColumn(name = "id_curso")
	private Cursos id_curso;
	
	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "descripcion")
	private String descripcion;

	public Temas(int idTema, Cursos idCurso, String titulo, String descripcion) {
		super();
		this.id_tema = idTema;
		this.id_curso = idCurso;
		this.titulo = titulo;
		this.descripcion = descripcion;
	}

	public Temas() {
		
	}

	public int getIdTema() {
		return id_tema;
	}

	public void setIdTema(int idTema) {
		this.id_tema = idTema;
	}

	public Cursos getIdCurso() {
		return id_curso;
	}

	public void setIdCurso(Cursos idCurso) {
		this.id_curso = idCurso;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
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

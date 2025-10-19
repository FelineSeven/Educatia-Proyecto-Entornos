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
@Table(name = Examenes.TABLE_NAME)
public class Examenes {
	public static final String TABLE_NAME = "examenes";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_examen;
	
	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(name = "id_tema")
	private Temas idTema;
	
	@Column(name = "valor_examen")
	private double valorExamen;

	public Examenes(int id_examen, String titulo, String descripcion, Temas idTema, double valorExamen) {
		super();
		this.id_examen = id_examen;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.idTema = idTema;
		this.valorExamen = valorExamen;
	}

	public Examenes() {
		
	}

	public int getId_examen() {
		return id_examen;
	}

	public void setId_examen(int id_examen) {
		this.id_examen = id_examen;
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

	public Temas getIdTema() {
		return idTema;
	}

	public void setIdTema(Temas idTema) {
		this.idTema = idTema;
	}

	public double getValorExamen() {
		return valorExamen;
	}

	public void setValorExamen(double valorExamen) {
		this.valorExamen = valorExamen;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
	
	
}

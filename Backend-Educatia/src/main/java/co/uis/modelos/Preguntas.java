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
@Table(name= Preguntas.TABLE_NAME)
public class Preguntas {
	public static final String TABLE_NAME = "preguntas";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPregunta;
	
	@ManyToOne
	@JoinColumn(name = "id_examen")
	private Examenes idExamen;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "valor_Porcentaje")
	private String valorPorcentaje;
	
	@Column(name = "opciones_de_respuesta")
	private String opcionesRespuesta;
	
	

	public Preguntas(int idPregunta, Examenes idExamen, String descripcion, String valorPorcentaje,
			String opcionesRespuesta) {
		super();
		this.idPregunta = idPregunta;
		this.idExamen = idExamen;
		this.descripcion = descripcion;
		this.valorPorcentaje = valorPorcentaje;
		this.opcionesRespuesta = opcionesRespuesta;
	}

	public Preguntas() {
	}

	public int getIdPregunta() {
		return idPregunta;
	}

	public void setIdPregunta(int idPregunta) {
		this.idPregunta = idPregunta;
	}

	public Examenes getIdExamen() {
		return idExamen;
	}

	public void setIdExamen(Examenes idExamen) {
		this.idExamen = idExamen;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getValorPorcentaje() {
		return valorPorcentaje;
	}

	public void setValorPorcentaje(String valorPorcentaje) {
		this.valorPorcentaje = valorPorcentaje;
	}

	public String getOpcionesRespuesta() {
		return opcionesRespuesta;
	}

	public void setOpcionesRespuesta(String opcionesRespuesta) {
		this.opcionesRespuesta = opcionesRespuesta;
	}


	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

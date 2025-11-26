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
@Table(name= Respuestas.TABLE_NAME)
public class Respuestas {
	public static final String TABLE_NAME = "respuestas";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_respuesta")
	private int idRespuesta;
	
	@Column(name = "respuesta")
	private String respuesta;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(name = "id_pregunta")
	private Preguntas idPregunta;
	
	@Column(name = "respuesta_correcta")
	private boolean respuestaCorrecta;

	public Respuestas(int idRespuesta, String respuesta, String descripcion, Preguntas idPregunta,
			boolean respuestaCorrecta) {
		super();
		this.idRespuesta = idRespuesta;
		this.respuesta = respuesta;
		this.descripcion = descripcion;
		this.idPregunta = idPregunta;
		this.respuestaCorrecta = respuestaCorrecta;
	}

	public Respuestas() {
	}

	public int getIdRespuesta() {
		return idRespuesta;
	}

	public void setIdRespuesta(int idRespuesta) {
		this.idRespuesta = idRespuesta;
	}

	public String getRespuesta() {
		return respuesta;
	}

	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Preguntas getIdPregunta() {
		return idPregunta;
	}

	public void setIdPregunta(Preguntas idPregunta) {
		this.idPregunta = idPregunta;
	}

	public boolean isRespuestaCorrecta() {
		return respuestaCorrecta;
	}

	public void setRespuestaCorrecta(boolean respuestaCorrecta) {
		this.respuestaCorrecta = respuestaCorrecta;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

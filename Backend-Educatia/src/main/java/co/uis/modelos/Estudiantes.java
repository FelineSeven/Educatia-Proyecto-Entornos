package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = Estudiantes.TABLE_NAME)
public class Estudiantes {
	public static final String TABLE_NAME = "estudiantes";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_estudiante;
	
	@OneToOne
	@JoinColumn(name= "id_usuario")
	private Usuarios id_usuario;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "correo")
	private String correo;

	public Estudiantes(int id, Usuarios id_usuario, String nombre, String correo) {
		super();
		this.id_estudiante = id;
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.correo = correo;
	}

	public Estudiantes() {
		
	}

	public int getId() {
		return id_estudiante;
	}

	public void setId(int id) {
		this.id_estudiante = id;
	}

	public Usuarios getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Usuarios id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

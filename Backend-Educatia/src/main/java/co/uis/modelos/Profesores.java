package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.math.BigInteger;

@Entity
@Table(name= Profesores.TABLE_NAME)
public class Profesores {
	public static final String TABLE_NAME = "profesores";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_profesor;
	
	@OneToOne
	@JoinColumn(name= "id_usuario")
	private Usuarios id_usuario;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "correo")
	private String correo;
	
	@Column(name = "telefono")
	private int telefono;
	
	@Column(name = "estudios")
	private String estudios;
	
	@Column(name = "numero_documento")
	private BigInteger numero_documento;

	public Profesores(int id_profesor, Usuarios id_usuario, String nombre, String correo, int telefono, String estudios,
			BigInteger numeroDocumento) {
		super();
		this.id_profesor = id_profesor;
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.correo = correo;
		this.telefono = telefono;
		this.estudios = estudios;
		this.numero_documento = numeroDocumento;
	}

	public Profesores() {
		
	}

	public int getId_profesor() {
		return id_profesor;
	}

	public void setId_profesor(int id_profesor) {
		this.id_profesor = id_profesor;
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

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getEstudios() {
		return estudios;
	}

	public void setEstudios(String estudios) {
		this.estudios = estudios;
	}

	public BigInteger getNumeroDocumento() {
		return numero_documento;
	}

	public void setNumeroDocumento(BigInteger numeroDocumento) {
		this.numero_documento = numeroDocumento;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
	
}

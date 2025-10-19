package co.uis.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= Usuarios.TABLE_NAME)
public class Usuarios {
	public static final String TABLE_NAME = "usuarios";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_usuario;
	
	@Column(name = "nombre_usuario")
	private String nombre_usuario;
	
	@Column(name = "password_usuario")
	private String password;

	public Usuarios(int id_usuario, String nombreUsuario, String password) {
		super();
		this.id_usuario = id_usuario;
		this.nombre_usuario = nombreUsuario;
		this.password = password;
	}

	public Usuarios() {
		
	}

	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNombreUsuario() {
		return nombre_usuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombre_usuario = nombreUsuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

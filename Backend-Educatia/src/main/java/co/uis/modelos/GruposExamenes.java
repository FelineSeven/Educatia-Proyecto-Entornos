package co.uis.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name= GruposExamenes.TABLE_NAME)
public class GruposExamenes {
	public static final String TABLE_NAME = "grupos_examenes";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idGrupoExamen;
	
	@ManyToOne
	@JoinColumn(name = "id_grupo")
	private Grupos idGrupo;
	
	@ManyToOne
	@JoinColumn(name = "id_examen")
	private Examenes idExamen;

	public GruposExamenes(int idGrupoExamen, Grupos idGrupo, Examenes idExamen) {
		super();
		this.idGrupoExamen = idGrupoExamen;
		this.idGrupo = idGrupo;
		this.idExamen = idExamen;
	}

	public GruposExamenes() {
		
	}

	public int getIdGrupoExamen() {
		return idGrupoExamen;
	}

	public void setIdGrupoExamen(int idGrupoExamen) {
		this.idGrupoExamen = idGrupoExamen;
	}

	public Grupos getIdGrupo() {
		return idGrupo;
	}

	public void setIdGrupo(Grupos idGrupo) {
		this.idGrupo = idGrupo;
	}

	public Examenes getIdExamen() {
		return idExamen;
	}

	public void setIdExamen(Examenes idExamen) {
		this.idExamen = idExamen;
	}

	public static String getTableName() {
		return TABLE_NAME;
	}
	
	
}

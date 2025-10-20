const API_URL = "http://localhost:8094/api/cursos";

// --- Crear curso ---
async function crearCurso() {
    const nombreAsignatura = document.getElementById("nombreCurso").value.trim();
    const descripcion = document.getElementById("descripcionCurso").value.trim();

    if (!nombreAsignatura) return alert("Debes escribir un nombre para el curso.");

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombreAsignatura, descripcion })
    });

    document.getElementById("nombreCurso").value = "";
    document.getElementById("descripcionCurso").value = "";
    listarCursos();
}

// --- Editar curso ---
async function editarCurso(id, nombreActual, descripcionActual) {
    nombreActual = decodeURIComponent(nombreActual);
    descripcionActual = decodeURIComponent(descripcionActual);

    const nuevoNombre = prompt("Nuevo nombre del curso:", nombreActual);
    if (!nuevoNombre) return;

    const nuevaDescripcion = prompt("Nueva descripción del curso:", descripcionActual);
    if (nuevaDescripcion === null) return;

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombreAsignatura: nuevoNombre, descripcion: nuevaDescripcion })
    });

    listarCursos();
}

// --- Listar cursos ---
async function listarCursos() {
    const response = await fetch(API_URL);
    const cursos = await response.json();
    const lista = document.getElementById("lista-cursos");

    lista.innerHTML = ""; // limpiar lista
    cursos.forEach(curso => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${curso.nombreAsignatura || "Sin nombre"}</strong><br>
            <small>${curso.descripcion || "Sin descripción"}</small><br>
            <button onclick="editarCurso(${curso.idCurso || curso.id_curso}, '${encodeURIComponent(curso.nombreAsignatura || "")}', '${encodeURIComponent(curso.descripcion || "")}')">Editar</button>
            <button onclick="eliminarCurso(${curso.idCurso || curso.id_curso})">Eliminar</button>
            <button onclick="verTemas(${curso.idCurso || curso.id_curso})">Ver Temas</button>
        `;
        lista.appendChild(li);
    });
}

// --- Eliminar curso ---
async function eliminarCurso(id) {
    if (!confirm("¿Seguro que deseas eliminar este curso?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    listarCursos();
}

// --- Navegar a temas del curso ---
function verTemas(idCurso) {
    window.location.href = `temas.html?curso=${idCurso}`;
}

listarCursos();



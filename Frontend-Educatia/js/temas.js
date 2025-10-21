
const urlBase = 'http://localhost:8094/api/temas';

// Obtener el parámetro idCurso desde la URL
const urlParams = new URLSearchParams(window.location.search);
const idCurso = urlParams.get('id');

const btnCrear = document.getElementById('btn-crear');
const inputTitulo = document.getElementById('titulo');
const inputDescripcion = document.getElementById('descripcion');
const temasBody = document.getElementById('temas-body');

// Crear un nuevo tema dentro del curso actual
async function crearTema() {
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();

    if (!titulo || !descripcion) {
        return alert('Todos los campos son obligatorios');
    }

    const temaData = {
        titulo,
        descripcion,
        idCurso: { idCurso: parseInt(idCurso) } // 👈 estructura anidada correcta
    };

    try {
        const res = await fetch(urlBase, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(temaData)
        });

        if (!res.ok) {
            throw new Error(`Error ${res.status}: no se pudo crear el tema`);
        }

        inputTitulo.value = '';
        inputDescripcion.value = '';
        cargarTemas();
    } catch (error) {
        console.error('Error al crear tema:', error);
    }
}

/*----------------*/
async function cargarTemas() {
    try {
        
        const res = await fetch(`${urlBase}/curso/${idCurso}`);
        if (!res.ok) throw new Error(`Error al obtener temas (${res.status})`);

        const temas = await res.json();
        temasBody.innerHTML = ''; // limpiar tabla

        if (temas.length === 0) {
            temasBody.innerHTML = `
                <tr><td colspan="5">No hay temas registrados para este curso.</td></tr>
            `;
            return;
        }

        temas.forEach(tema => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${tema.idTema}</td>
                <td>${tema.titulo}</td>
                <td>${tema.descripcion}</td>
                <td>
                    <button onclick="irAExamenes(${tema.idTema})">Exámenes</button>
                </td>
                <td>
                    <button onclick="editarTema(${tema.idTema}, '${tema.titulo}', '${tema.descripcion}')">Editar</button>
                    <button onclick="eliminarTema(${tema.idTema})">Eliminar</button>
                </td>
            `;
            temasBody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar temas:', error);
    }
}


async function editarTema(id, tituloActual, descripcionActual) {
    const nuevoTitulo = prompt('Nuevo título:', tituloActual);
    const nuevaDescripcion = prompt('Nueva descripción:', descripcionActual);

    if (!nuevoTitulo || !nuevaDescripcion) {
        alert('Edición cancelada o campos vacíos.');
        return;
    }

    const temaEditado = {
        idTema: id,
        titulo: nuevoTitulo,
        descripcion: nuevaDescripcion,
        idCurso: { idCurso: parseInt(idCurso) }
    };

    try {
        const res = await fetch(`${urlBase}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(temaEditado)
        });

        if (!res.ok) throw new Error(`Error ${res.status} al editar tema`);
        cargarTemas();
    } catch (error) {
        console.error('Error al editar tema:', error);
    }
}

async function eliminarTema(id) {
    if (!confirm('¿Seguro que quieres eliminar este tema?')) return;

    try {
        await fetch(`${urlBase}/${id}`, { method: 'DELETE' });
        cargarTemas();
    } catch (error) {
        console.error('Error al eliminar tema:', error);
    }
}


function irAExamenes(idTema) {
    window.location.href = `examenes.html?idTema=${idTema}`;
}


// Al hacer clic en "Crear tema", ejecuta la función correspondiente
btnCrear.addEventListener('click', crearTema);

// Cuando se cargue la página, muestra los temas del curso si hay un id válido
if (idCurso) {
    cargarTemas();
} else {
    alert('No se ha proporcionado un curso válido.');
}


/*
const urlTemas = 'http://localhost:8094/api/temas';

// Elementos del DOM
const btnCrear = document.getElementById('btn-crear');
const inputTitulo = document.getElementById('titulo');
const inputDescripcion = document.getElementById('descripcion');
const temasBody = document.getElementById('temas-body');

// Cargar temas desde el backend
async function cargarTemas() {
    try {
        const res = await fetch(urlTemas);
        const temas = await res.json();

        temasBody.innerHTML = '';
        temas.forEach(tema => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${tema.idTema}</td>
                <td>${tema.titulo}</td>
                <td>${tema.descripcion}</td>
                <td>
                    <button onclick="eliminarTema(${tema.idTema})">Eliminar</button>
                </td>
            `;
            temasBody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar temas:', error);
    }
}

// Crear un nuevo tema
async function crearTema() {
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();

    if (!titulo || !descripcion) {
        return alert('Todos los campos son obligatorios');
    }

    // Para curso temporal se puede enviar null o un id por defecto
    const temaData = {
        titulo,
        descripcion,
        id_curso: null // o un id temporal, por ejemplo { id_curso: 1 }
    };

    try {
        const res = await fetch(urlTemas, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(temaData)
        });
        await res.json();
        inputTitulo.value = '';
        inputDescripcion.value = '';
        cargarTemas();
    } catch (error) {
        console.error('Error al crear tema:', error);
    }
}

// Eliminar un tema
async function eliminarTema(id) {
    if (!confirm('¿Seguro que quieres eliminar este tema?')) return;
    try {
        await fetch(`${urlTemas}/${id}`, { method: 'DELETE' });
        cargarTemas();
    } catch (error) {
        console.error('Error al eliminar tema:', error);
    }
}

// Eventos
btnCrear.addEventListener('click', crearTema);

// Carga inicial
cargarTemas();

*/
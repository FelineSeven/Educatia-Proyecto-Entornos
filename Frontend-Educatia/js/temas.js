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


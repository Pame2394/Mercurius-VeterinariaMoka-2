const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let usuarios = [];

const llenarArregloUsuarios = async() => {
    usuarios = await getDatos('listar-usuarios');
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    usuarios.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.cedula;
        fila.insertCell().textContent = usuarioTemp.telefono;
        fila.insertCell().textContent = usuarioTemp.correo;
        fila.insertCell().textContent = usuarioTemp.direccion;
        fila.insertCell().textContent = usuarioTemp.rol;
        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-usuario');

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        let btnPerfil = document.createElement('button');
        btnPerfil.textContent = 'Ver Perfil';
        btnPerfil.type = 'button';
        btnPerfil.classList.add('btn-usuario');

        tdAcciones.appendChild(btnPerfil);
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro?',
                text: "La acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos('eliminar-usuario', usuarioTemp._id);
                }
            })
        });
        btnPerfil.addEventListener('click', () => {
            localStorage.setItem('usuarioPerfil', JSON.stringify(usuarioTemp));
            window.location.href = 'usuario-perfil.html';
        });
    });
};

llenarArregloUsuarios();
const cuerpoTabla = document.querySelector('#tbl-usuario-registrado tbody');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    ranking.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = usuarioTemp.nombremascota;
        fila.insertCell().textContent = usuarioTemp.fechaentrada;
        fila.insertCell().textContent = usuarioTemp.fechasalida;
        fila.insertCell().textContent = usuarioTemp.padecimientos;
        fila.insertCell().textContent = usuarioTemp.valoracion;

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-usuario');

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

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
                    Swal.fire(
                        '¡Registro eliminado!',
                        'El usuario fue borrado',
                        'success'
                    )
                }
            })
        });

    });


};


llenarTabla();
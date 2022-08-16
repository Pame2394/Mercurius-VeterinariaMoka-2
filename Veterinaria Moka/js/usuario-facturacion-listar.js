const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let facturaciones = [];

const llenarArregloFacturacions = async() => {
    facturaciones = await getDatos('listar-facturacion');
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    facturaciones.forEach(facturacionTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = facturacionTemp.nombre;
        fila.insertCell().textContent = facturacionTemp.telefono;
        fila.insertCell().textContent = facturacionTemp.correo;
        fila.insertCell().textContent = facturacionTemp.monto;
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
                    eliminarDatos('eliminar-facturacion', facturacionTemp._id);

                }
            })
        });

    });
};

llenarArregloFacturacions();
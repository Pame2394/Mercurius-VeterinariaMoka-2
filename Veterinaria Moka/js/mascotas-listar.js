const informacionTabla = document.querySelector('#tbl-lista-mascotas tbody');


const llenarTabla = () => {
    informacionTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    mascotasListar.forEach(usuarioTemp => {
        let fila = informacionTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.edad;
        fila.insertCell().textContent = usuarioTemp.raza;
        fila.insertCell().textContent = usuarioTemp.sexo;

        //Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-usuario');

        let btnPerfil = document.createElement('button');
        btnPerfil.textContent = 'Ver Perfil';
        btnPerfil.type = 'button';
        btnPerfil.classList.add('btn-usuario');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el botón de editar y eliminar a la celda de acciones
        tdAcciones.appendChild(btnPerfil);

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
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
        btnPerfil.addEventListener('click', () => {
            window.location.href = 'mascota-perfil.html';
        });
    });
};


llenarTabla();
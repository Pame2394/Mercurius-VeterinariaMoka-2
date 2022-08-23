const informacionTabla = document.querySelector('#tbl-lista-mascotas tbody');
const inputFiltro = document.getElementById("txt-filtro");

let mascotasListar = [];

const llenarArregloMascota = async()=>{
    mascotasListar = await getDatos("mascotas-listar");
    llenarTabla();
};

function llenarTabla() {
    informacionTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla


    //Para cada usuario que se encuentre dentro de la colección de usuarios
    mascotasListar.forEach(mascotaTemp => {
        if (mascotaTemp.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = informacionTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = mascotaTemp.nombre;
        fila.insertCell().textContent = mascotaTemp.edad;
        fila.insertCell().textContent = mascotaTemp.raza;
        fila.insertCell().textContent = mascotaTemp.color;
        fila.insertCell().textContent = mascotaTemp.sexo;
        fila.insertCell().textContent = mascotaTemp.padecimientos;

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
                    );
                }
            });
        });


        //Creación de un input
        let inputGenerico = document.createElement('input');
        inputGenerico.type = 'text';
        inputGenerico.placeholder = 'Jhon Doe';

        fila.insertCell().appendChild(inputGenerico);
    }
    });
};  

llenarArregloMascota();
// let btnMostrarOcultar = document.getElementById('btn-mostrar');

// btnMostrarOcultar.addEventListener('click', () => {
//     if (tabla.classList.contains('ocultar')) {
//         btnMostrarOcultar.textContent = 'Ocultar lista';
//         tabla.classList.remove('ocultar');
//     } else {
//         btnMostrarOcultar.textContent = 'Mostrar lista';
//         tabla.classList.add('ocultar');
//     }
//     //tabla.classList.toggle('ocultar');

// });

inputFiltro.addEventListener('keyup', llenarTabla);
document.getElementById('btn-agregar').addEventListener('click', () => {
    window.location.href = 'mascota-registro.html';
});
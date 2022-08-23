const informacionTabla = document.querySelector('#tbl-doctores tbody');
const inputFiltro = document.getElementById("txt-filtro");

let doctorListar = [];

const llenarArregloDoctor = async()=>{
    doctorListar = await getDatos("doctores-listar");
    llenarTabla();
};

const llenarTabla = () => {
    informacionTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    doctorListar.forEach(doctorTemp=> {
        if (doctorTemp.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = informacionTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = doctorTemp.nombre;
        fila.insertCell().textContent = doctorTemp.cedula;
        fila.insertCell().textContent = doctorTemp.correo;
        fila.insertCell().textContent = doctorTemp.direccion;
        fila.insertCell().textContent = doctorTemp.experiencia;
        fila.insertCell().textContent = doctorTemp.genero;
        fila.insertCell().textContent = doctorTemp.fotografia;

        //Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-usuario');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el botón de editar y eliminar a la celda de acciones
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

        //Creación de un input
        //let inputGenerico = document.createElement('input');
       // inputGenerico.type = 'text';
       // inputGenerico.placeholder = 'Jhon Doe';

       // fila.insertCell().appendChild(inputGenerico);//
}});
};


llenarArregloDoctor ();
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
    window.location.href = 'doctor-registro.html';
});
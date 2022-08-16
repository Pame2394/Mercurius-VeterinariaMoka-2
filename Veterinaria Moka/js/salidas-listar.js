const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
moment.locale('es');
let salidas = [];

const llenarArregloUsuarios = async() => {
    usuarios = await getDatos('listar-salidas');
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';


    usuarios.forEach(listarSalidas => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = listarSalidas.nombre;
        fila.insertCell().textContent = listarSalidas.telefono;
        fila.insertCell().textContent = listarSalidas.correo;
        fila.insertCell().textContent = listarSalidas.mascota;
        fila.insertCell().textContent = moment(listarSalidas.entrada).add(1, 'days').format('MM/DD/YYYY');

    });

};

llenarArregloUsuarios();
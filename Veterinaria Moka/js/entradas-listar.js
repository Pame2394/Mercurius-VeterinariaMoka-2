const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
moment.locale('es');
let entradas = [];

const llenarArregloUsuarios = async() => {
    usuarios = await getDatos('listar-entradas');
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';


    usuarios.forEach(listarEntradas => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = listarEntradas.nombre;
        fila.insertCell().textContent = listarEntradas.telefono;
        fila.insertCell().textContent = listarEntradas.correo;
        fila.insertCell().textContent = listarEntradas.mascota;
        fila.insertCell().textContent = moment(listarEntradas.entrada).add(1, 'days').format('MM/DD/YYYY');
        fila.insertCell().textContent = listarEntradas.observacion;

    });

};

llenarArregloUsuarios();
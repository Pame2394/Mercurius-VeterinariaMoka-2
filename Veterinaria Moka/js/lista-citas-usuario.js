const informacionTabla = document.querySelector('#tbl-lista-citas tbody');


const llenarTabla = () => {
    informacionTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    listaCitas.forEach(usuarioTemp => {
        let fila = informacionTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.fecha;
        fila.insertCell().textContent = usuarioTemp.hora;
        fila.insertCell().textContent = usuarioTemp.motivo;


    });
};


llenarTabla();
usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const llenarTabla = () => {

    document.querySelector('#nombre-usuario').textContent = usuarioConectado.nombre;
    document.querySelector('#cedula-usuario').textContent = usuarioConectado.cedula;
    document.querySelector('#telefono-usuario').textContent = usuarioConectado.telefono;
    document.querySelector('#correo-usuario').textContent = usuarioConectado.correo;
    document.querySelector('#direccion-usuario').textContent = usuarioConectado.direccion;

};

llenarTabla();
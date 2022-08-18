usuarioPerfil = JSON.parse(localStorage.getItem('usuarioPerfil'));

const llenarTabla = () => {

    document.querySelector('#nombre-usuario').textContent = usuarioPerfil.nombre;
    document.querySelector('#cedula-usuario').textContent = usuarioPerfil.cedula;
    document.querySelector('#telefono-usuario').textContent = usuarioPerfil.telefono;
    document.querySelector('#correo-usuario').textContent = usuarioPerfil.correo;
    document.querySelector('#direccion-usuario').textContent = usuarioPerfil.direccion;

};

llenarTabla();
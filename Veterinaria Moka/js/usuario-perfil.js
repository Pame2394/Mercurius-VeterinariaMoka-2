usuarioPerfil = JSON.parse(localStorage.getItem('usuarioPerfil'));

const llenarTabla = () => {
    if (usuarioPerfil == null) {
        document.querySelector('#nombre-usuario').textContent = usuarioConectado.nombre;
        document.querySelector('#cedula-usuario').textContent = usuarioConectado.cedula;
        document.querySelector('#telefono-usuario').textContent = usuarioConectado.telefono;
        document.querySelector('#correo-usuario').textContent = usuarioConectado.correo;
        document.querySelector('#direccion-usuario').textContent = usuarioConectado.direccion;
        document.querySelector('#foto-usuario').src = usuarioConectado.foto;
    } else {
        document.querySelector('#nombre-usuario').textContent = usuarioPerfil.nombre;
        document.querySelector('#cedula-usuario').textContent = usuarioPerfil.cedula;
        document.querySelector('#telefono-usuario').textContent = usuarioPerfil.telefono;
        document.querySelector('#correo-usuario').textContent = usuarioPerfil.correo;
        document.querySelector('#direccion-usuario').textContent = usuarioPerfil.direccion;
        document.querySelector('#foto-usuario').src = usuarioPerfil.foto;
    }
};

llenarTabla();
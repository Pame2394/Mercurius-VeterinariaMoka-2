usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const menu = document.getElementById('menu-backend');
const botonIngresar = document.getElementById('btn-ingresar');
const botonSalir = document.getElementById('btn-salir');
const botonCrearCuenta = document.getElementById('crear-cuenta');
const opcionesNav = document.querySelectorAll('#menu-backend a');
const btnIngresar = document.getElementById('btn-ingresar');
const btnSalir = document.getElementById('btn-salir');

const mostrarOpciones = () => {

    if (usuarioConectado == null) {
        menu.classList.add('ocultar');
        botonSalir.classList.add('ocultar');
    } else {
        botonIngresar.classList.add('ocultar');
        botonCrearCuenta.classList.add('ocultar');
        switch (usuarioConectado.rol) {
            case 1:
                opcionesNav[7].classList.add('ocultar');

                opcionesNav[20].classList.add('ocultar');
                break;
            case 2:
                opcionesNav[2].classList.add('ocultar');
                opcionesNav[3].classList.add('ocultar');
                opcionesNav[5].classList.add('ocultar');
                opcionesNav[8].classList.add('ocultar');
                opcionesNav[11].classList.add('ocultar');
                opcionesNav[14].classList.add('ocultar');
                opcionesNav[18].classList.add('ocultar');
                opcionesNav[19].classList.add('ocultar');
                opcionesNav[23].classList.add('ocultar');
                opcionesNav[24].classList.add('ocultar');

                break;
            case 3:
                opcionesNav[1].classList.add('ocultar');
                opcionesNav[6].classList.add('ocultar');
                opcionesNav[7].classList.add('ocultar');
                opcionesNav[11].classList.add('ocultar');
                opcionesNav[14].classList.add('ocultar');
                opcionesNav[17].classList.add('ocultar');
                opcionesNav[21].classList.add('ocultar');

                break;
            case 4:
                opcionesNav[3].classList.add('ocultar');
                opcionesNav[7].classList.add('ocultar');
                opcionesNav[17].classList.add('ocultar');
                opcionesNav[22].classList.add('ocultar');
                opcionesNav[23].classList.add('ocultar');

                break;
            default:

        }
    };
}

//Roles:
// 1 = Administrador
// 2 = Cliente
// 3 = Médico
// 4 = Secretario/Secretaria

const iniciarSesion = async() => {

    const { value: formValues } = await Swal.fire({
        title: 'Inicio de sesión',
        html: '<p><label for="txt-correo-inicio">Correo electrónico:</label> </p><input id="txt-correo-inicio" class="swal2-input" type="email">' +
            '<p><label for="txt-contrasenna">Contraseña:</label></p>  <input id="txt-contrasenna" class="swal2-input" type="password">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('txt-correo-inicio').value,
                document.getElementById('txt-contrasenna').value
            ]
        }
    })

    if (formValues) {
        let correo = formValues[0];
        let clave = formValues[1];
        validarCredenciales(correo, clave);
    }
};

const validarCredenciales = (correo, clave) => {
    let usuarioValidado = false;
    usuarios.forEach(objUsuario => {
        if (objUsuario.correo == correo && objUsuario.clave == clave) {
            usuarioValidado = true;
            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
        }
    });

    if (usuarioValidado == false) {
        Swal.fire({
            'title': 'No se ha podido iniciar sesión',
            'text': 'Correo o contraseña incorrectas',
            'icon': 'warning',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'title': 'Inicio de sesión correcto',
            'text': 'Bienvenido',
            'icon': 'success',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'index.html';
        });
    }
};


const cerrarSesion = async() => {
    localStorage.clear();
    window.location.href = 'index.html';
};

mostrarOpciones();
btnIngresar.addEventListener('click', iniciarSesion)
btnSalir.addEventListener('click', cerrarSesion)

if (usuarioConectado != null) {
    document.getElementById('usuario-conectado').append(usuarioConectado.nombre);
}
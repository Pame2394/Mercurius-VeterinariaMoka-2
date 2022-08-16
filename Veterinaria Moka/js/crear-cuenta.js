const inputNombre = document.getElementById('txt-nombre');
const inputCedula = document.getElementById('txt-cedula');
const inputTelefono = document.getElementById('txt-telefono');
const inputCorreo = document.getElementById('txt-correo');
const inputDireccion = document.getElementById('txt-direccion');
const inputClave1 = document.getElementById('txt-clave1');
const inputClave2 = document.getElementById('txt-clave2');
const btnGuardar = document.getElementById('btn-guardar');

const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }
    if (inputCedula.value == '') {
        error = true;
        inputCedula.classList.add('input-error');
    } else {
        inputCedula.classList.remove('input-error');
    }
    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('input-error');
    } else {
        inputTelefono.classList.remove('input-error');
    }
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }
    if (inputDireccion.value == '') {
        error = true;
        inputDireccion.classList.add('input-error');
    } else {
        inputDireccion.classList.remove('input-error');
    }
    if (inputClave1.value == '') {
        error = true;
        inputClave1.classList.add('input-error');
    } else {
        inputClave1.classList.remove('input-error');
    }
    if (inputClave2.value !== '' && inputClave2.value == inputClave1.value) {
        inputClave2.classList.remove('input-error');
    } else {
        error = true;
        inputClave2.classList.add('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Error: Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'OK'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    let usuario = {
        'nombre': inputNombre.value,
        'cedula': inputCedula.value,
        'telefono': inputTelefono.value,
        'correo': inputCorreo.value,
        'direccion': inputDireccion.value,
        'clave': inputClave1.value,
        'rol': 2
    };
    registrarDatos('registrar-usuario', usuario, 'index.html');

};

btnGuardar.addEventListener('click', validar);
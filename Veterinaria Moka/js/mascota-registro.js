const inputNombre = document.getElementById('txt-nombre');
const inputTelefono = document.getElementById('txt-telefono');
const inputCorreo = document.getElementById('txt-correo');
const inputNombreMascota = document.getElementById('txt-nombre-mascota');
const inputFechaEntrada = document.getElementById('fecha-entrada');
const inputObservacion = document.getElementById('txt-observaciones');
const btnGuardar = document.getElementById('btn-guardar');

const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
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

    if (inputNombreMascota.value == '') {
        error = true;
        inputNombreMascota.classList.add('input-error');
    } else {
        inputNombreMascota.classList.remove('input-error');
    }

    if (inputFechaEntrada.value == '') {
        error = true;
        inputFechaEntrada.classList.add('input-error');
    } else {
        inputFechaEntrada.classList.remove('input-error');
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
    let entrada = {
        'nombre': inputNombre.value,
        'telefono': inputTelefono.value,
        'correo': inputCorreo.value,
        'mascota': inputNombreMascota.value,
        'entrada': inputFechaEntrada.value,
        'observacion': inputObservacion.value
    };
    registrarDatos('registrar-entrada', entrada, 'mascota-checkin.html');

};

btnGuardar.addEventListener('click', validar);
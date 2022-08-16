const inputNombre = document.getElementById('txt-nombre');
const inputTelefono = document.getElementById('txt-telefono');
const inputCorreo = document.getElementById('txt-correo');
const inputMonto = document.getElementById('txt-monto');
const btnPagar = document.getElementById('btn-pagar');

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

    if (inputMonto.value == '') {
        error = true;
        inputMonto.classList.add('input-error');
    } else {
        inputMonto.classList.remove('input-error');
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
    let facturacion = {
        'nombre': inputNombre.value,
        'telefono': inputTelefono.value,
        'correo': inputCorreo.value,
        'monto': inputMonto.value
    };
    registrarDatos('registrar-facturacion', facturacion, 'usuario-facturacion.html');

};

btnPagar.addEventListener('click', validar);
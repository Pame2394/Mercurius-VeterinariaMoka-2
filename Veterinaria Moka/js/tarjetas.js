const inputTitular = document.getElementById('txt-nombretar');
const inputNumeroTar = document.getElementById('txt-numerotar');
const inputVencimiento = document.getElementById('date-vencimiento');
const inputCCV = document.getElementById('txt-ccv');
const btnGuardar = document.getElementById('btn-guardar-pagos');

const validar = () => {
    let error = false;
    if (inputTitular.value == '') {
        error = true;
        inputTitular.classList.add('input-error');
    } else {
        inputTitular.classList.remove('input-error');
    }
    if (inputNumeroTar.value == '') {
        error = true;
        inputNumeroTar.classList.add('input-error');
    } else {
        inputNumeroTar.classList.remove('input-error');
    }
    if (inputVencimiento.value == '') {
        error = true;
        inputVencimiento.classList.add('input-error');
    } else {
        inputVencimiento.classList.remove('input-error');
    }
    if (inputCCV.value == '') {
        error = true;
        inputCCV.classList.add('input-error');
    } else {
        inputCCV.classList.remove('input-error');
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
    let registro = {
        'titular': inputTitular.value,
        'numerotar': inputNumeroTar.value,
        'vencimiento': inputVencimiento.value,
        'ccv': inputCCV.value
    };

    console.log(registro);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos guardados',
        'text': '¡El metodo de pago ha sido registrado correctamente!',
        'confirmButtonText': '¡OK!'
    }).then(() => {
        window.location.href = 'pagos-agregar.html';
    });
};


btnGuardar.addEventListener('click', validar);
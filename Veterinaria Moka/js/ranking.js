const inputMascota = document.getElementById('txt-mascota');
const inputFIngreso = document.getElementById('txt-fingreso');
const inputFSalida = document.getElementById('txt-fsalida');
const inputPadecimientos = document.getElementById('txt-padecimientos');
const inputCuidados = document.getElementById('txt-cuidados');
const inputComportamiento = document.getElementById('txt-comportamiento');
const btnGuardar = document.getElementById('btn-guardar-ranking');

const validar = () => {
    let error = false;
    if (inputMascota.value == '') {
        error = true;
        inputMascota.classList.add('input-error');
    } else {
        inputMascota.classList.remove('input-error');
    }
    if (inputFIngreso.value == '') {
        error = true;
        inputFIngreso.classList.add('input-error');
    } else {
        inputFIngreso.classList.remove('input-error');
    }
    if (inputFSalida.value == '') {
        error = true;
        inputFSalida.classList.add('input-error');
    } else {
        inputFSalida.classList.remove('input-error');
    }
    if (inputPadecimientos.value == '') {
        error = true;
        inputPadecimientos.classList.add('input-error');
    } else {
        inputPadecimientos.classList.remove('input-error');
    }
    if (inputCuidados.value == '') {
        error = true;
        inputCuidados.classList.add('input-error');
    } else {
        inputCuidados.classList.remove('input-error');
    }
    if (inputComportamiento.value == '') {
        error = true;
        inputComportamiento.classList.add('input-error');
    } else {
        inputComportamiento.classList.remove('input-error');
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
        'mascota': inputMascota.value,
        'fingreso': inputFIngreso.value,
        'fsalida': inputFSalida.value,
        'padecimientos': inputPadecimientos.value,
        'cuidados': inputCuidados.value,
        'comportamiento': inputComportamiento.value
    };

    console.log(registro);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos guardados',
        'text': '¡El ranking ha sido registrado correctamente!',
        'confirmButtonText': '¡OK!'
    }).then(() => {
        window.location.href = 'mascota-ranking-registro.html';
    });
};


btnGuardar.addEventListener('click', validar);
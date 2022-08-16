const inputDoctor = document.getElementById('txt-nombredoc');
const inputObsmascotas = document.getElementById('txt-obsmascotas');
const btnGuardar = document.getElementById('btn-guardar-observaciones');

const validar = () => {
    let error = false;
    if (inputDoctor.value == '') {
        error = true;
        inputDoctor.classList.add('input-error');
    } else {
        inputDoctor.classList.remove('input-error');
    }
    if (inputObsmascotas.value == '') {
        error = true;
        inputObsmascotas.classList.add('input-error');
    } else {
        inputObsmascotas.classList.remove('input-error');
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
        'doctor': inputDoctor.value,
        'obsmascota': inputObsmascotas.value,
    };

    console.log(registro);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos guardados',
        'text': '¡La observacion ha sido registrada correctamente!',
        'confirmButtonText': '¡OK!'
    }).then(() => {
        window.location.href = 'mascota-listar-observaciones.html';
    });
};


btnGuardar.addEventListener('click', validar);
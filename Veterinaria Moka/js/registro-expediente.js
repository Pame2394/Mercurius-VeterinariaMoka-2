const inputNombre = document.getElementById('txt-nombre');
const inputCedula = document.getElementById('txt-cedula');
const inputAnimal = document.getElementById('txt-animal');
const inputGenero = document.getElementById('txt-genero');
const inputTelefono = document.getElementById('txt-telefono');
const inputAnotaciones = document.getElementById('txt-anotaciones');
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
    if (inputAnimal.value == '') {
        error = true;
        inputAnimal.classList.add('input-error');
    } else {
        inputAnimal.classList.remove('input-error');
    }
    if (inputGenero.value == '') {
        error = true;
        inputGenero.classList.add('input-error');
    } else {
        inputGenero.classList.remove('input-error');
    }

    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('input-error');
    } else {
        inputTelefono.classList.remove('input-error');
    }


    if (inputAnotaciones.value == '') {
        error = true;
        inputAnotaciones.classList.add('input-error');
    } else {
        inputAnotaciones.classList.remove('input-error');
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
        'nombre': inputNombre.value,
        'cedula': inputCedula.value,
        'animal': inputAnimal.value,
        'genero': inputGenero.value,
        'telefono': inputTelefono.value,
        'anotaciones': inputAnotaciones.value
    };

    console.log(registro);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos guardados',
        'text': '¡El expediente ha sido registrado correctamente!',
        'confirmButtonText': '¡OK!'
    }).then(() => {
        window.location.href = "expediente-registro.html";
    });
};

btnGuardar.addEventListener('click', validar);

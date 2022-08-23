//acceder al documento html

const inputNombre = document.getElementById("txt-nombre");
const inputCedula = document.getElementById("txt-cedula");
const inputCorreo = document.getElementById("txt-correo");
const inputDireccion = document.getElementById("txt-direccion");
const inputExperiencia = document.getElementById("txt-experiencia");
const selectGenero = document.getElementById("slt-genero");
const inputImagen = document.getElementById("img-fotografia")
const btnRegistrar = document.getElementById("Regristrar");

//crear función para validar
const validar = () => {
    let error = false;

    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add("input-error");

    } else {
        inputNombre.classList.remove("input-error")
    }

    if (inputCedula.value == "") {
        error = true;
        inputCedula.classList.add("inpunt-error");
    } else {
        inputCedula.classList.remove("input-error")
    }

    if (inputCorreo.value == "") {
        error = true;
        inputCorreo.classList.add("input-error");

    } else {
        inputCorreo.classList.remove("input-error")
    }

    if (inputDireccion.value == "") {
        error = true;
        inputDireccion.classList.add("input-error");

    } else {
        inputDireccion.classList.remove("input-error")
    }

    if (inputExperiencia.value == "") {
        error = true;
        inputExperiencia.classList.add("input-error");

    } else {
        inputExperiencia.classList.remove("input-error")
    }

    if (selectGenero.value == "") {
        error = true;
        selectGenero.classList.add("input-error");

    } else {
        selectGenero.classList.remove("input-error")
    }

    if (inputImagen.value == "") {
        error = true;
        inputImagen.classList.add("input-error");

    } else {
        inputImagen.classList.remove("input-error")
    }


    //biblioteca de alerta//
    if (error == true) {
        Swal.fire({
            "icon": "warning",
            "title": "Por favor revisar los datos",
            "text": "Por favor revise los campos resaltados",
            "confirmButtonText": "Entendido"
        })
    } else {
        obtenerDatos();
    }
};


//función obtener datos

const obtenerDatos = () => {
    let doctor = {
        "nombre": inputNombre.value,
        "cedula": inputCedula.value,
        "correo": inputCorreo.value,
        "direccion": inputDireccion.value,
        "experiencia": inputExperiencia.value,
        "genero": selectGenero.value,
        "fotografia": inputImagen.value
    };

    registrarDatos("registro-doctor", doctor, "doctores-listar.html");

};

Registrar.addEventListener("click", validar);
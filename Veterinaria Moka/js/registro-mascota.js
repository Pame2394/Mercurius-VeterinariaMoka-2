//acceder al documento html

const inputNombre = document.getElementById("txt-nombre");
const inputAnos = document.getElementById("txt-anos");
const inputRaza = document.getElementById("txt-raza");
const inputColor = document.getElementById("txt-color");
const selectSexo = document.getElementById("slt-sexo");
const inputImagen = document.getElementById("img-fotografia")
const inputPadecimientos = document.getElementById("txt-padecimientos");
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

    if (inputAnos.value == "") {
        error = true;
        inputAnos.classList.add("input-error")
    } else {
        inputAnos.classList.remove("input-error")
    }

    if (inputRaza.value == "") {
        error = true;
        inputRaza.classList.add("input-error");

    } else {
        inputRaza.classList.remove("input-error")
    }

    if (inputColor.value == "") {
        error = true;
        inputColor.classList.add("input-error");

    } else {
        inputColor.classList.remove("input-error")
    }

    if (selectSexo.value == "") {
        error = true;
        selectSexo.classList.add("input-error")
    } else {
        selectSexo.classList.remove("input-error")
    }

    if (inputImagen.value == "") {
        error = true;
        inputImagen.classList.add("input-error")
    } else {
        inputImagen.classList.remove("input-error")
    }

    if (inputPadecimientos.value == "") {
        error = true;
        inputPadecimientos.classList.add("input-error");

    } else {
        inputPadecimientos.classList.remove("input-error")
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
    let mascota = {
        "nombre" : inputNombre.value,
        "edad" : inputAnos.value,
        "raza" : inputRaza.value,
        "color" : inputColor.value,
        "imagen" : inputImagen.value,
        "sexo" : selectSexo.value,
        "padecimientos" : inputPadecimientos.value,

    };

    registrarDatos("registrar-mascota", mascota, "mascota-listar.html");

};

Registrar.addEventListener("click", validar);
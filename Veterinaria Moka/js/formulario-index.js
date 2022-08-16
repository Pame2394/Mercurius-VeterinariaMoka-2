//acceder al documento html

const inputNombre = document.getElementById("txt-nombre");
const inputCorreo = document.getElementById("txt-correo");
const inputTelefono = document.getElementById("txt-telefono");
const inputAsunto = document.getElementById("txt-asunto");
const inpuntMensaje = document.getElementById("txt-mensaje");
const btnEnviar = document.getElementById("enviar");

//crear función para validar
const validar = () => {
    let error = false;

    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add("input-error");

    } else {
        inputNombre.classList.remove("input-error")
    }

    if (inputCorreo.value == "") {
        error = true;
        inputCorreo.classList.add("input-error")
    } else {
        inputCorreo.classList.remove("input-error")
    }

    if (inputTelefono.value == "") {
        error = true;
        inputTelefono.classList.add("input-error");

    } else {
        inputTelefono.classList.remove("input-error")
    }

    if (inputAsunto.value == "") {
        error = true;
        inputAsunto.classList.add("input-error");

    } else {
        inputAsunto.classList.remove("input-error")
    }

    if (inpuntMensaje.value == "") {
        error = true;
        inpuntMensaje.classList.add("input-error")
    } else {
        inpuntMensaje.classList.remove("input-error")
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
    let formulario = {
        "nombre": inputNombre.value,
        "correo": inputCorreo.value,
        "telefono": inputTelefono.value,
        "asunto": inputAsunto.value,
        "Mensaje": inpuntMensaje.value,
    };

    console.log(formulario);

    //funcion alert exito//


    Swal.fire({
        "icon": "success",
        "title": "Datos correctos",
        "text": "Su mensaje se ha enviado",
        "confirmButtonText": "Entendido"
    });

};

enviar.addEventListener("click", validar);
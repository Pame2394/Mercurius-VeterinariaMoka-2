const inputNombre = document.getElementById("txt-nombre");
const inputRaza = document.getElementById("txt-raza");
const inputCedula = document.getElementById("txt-cedula");
const inputTelefono = document.getElementById("txt-telefono");
const selectFecha = document.getElementById("fecha");
const selectHora = document.getElementById("hora");
const inputMotivo = document.getElementById("txt-motivo");
const btnSacarCita = document.getElementById("Sacar-cita");


//crear función para validar
const validar = () => {
    let error = false;

    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add("input-error");

    } else {
        inputNombre.classList.remove("input-error")
    }
    if (inputRaza.value == "") {
        error = true;
        inputRaza.classList.add("input-error");

    } else {
        inputRaza.classList.remove("input-error")
    }
    if (inputCedula.value == "") {
        error = true;
        inputCedula.classList.add("input-error");

    } else {
        inputCedula.classList.remove("input-error")
    }
    if (inputTelefono.value == "") {
        error = true;
        inputTelefono.classList.add("input-error");

    } else {
        inputTelefono.classList.remove("input-error")
    }

    if (selectFecha.value == "") {
        error = true;
        selectFecha.classList.add("inpunt-error");
    } else {
        selectFecha.classList.remove("input-error")
    }

    if (selectHora.value == "") {
        error = true;
        selectHora.classList.add("input-error");

    } else {
        selectHora.classList.remove("input-error")
    }

    if (inputMotivo.value == "") {
        error = true;
        inputMotivo.classList.add("input-error");

    } else {
        inputMotivo.classList.remove("input-error")
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
    let registroExpediente = {
        "nombre": inputNombre.value,
        "cedula": inputCedula.value,
        "raza": inputRaza.value,
        "fecha": selectFecha.value,
        "hora": selectHora.value,
        "motivo": inputMotivo.value,

    };

    console.log(registroExpediente);

    //funcion alert exito//


    Swal.fire({
        "icon": "success",
        "title": "Datos correctos",
        "text": "Su registro ha sido exitoso",
        "confirmButtonText": "Entendido"
    }).then(() => {
        window.location.href = "mascota-cita.html";
    });

};

btnSacarCita.addEventListener("click", validar);

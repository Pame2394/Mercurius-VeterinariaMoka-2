const mongoose = require("mongoose");

const schemaDoctor = mongoose.Schema(
    {
        "nombre": {type: String, required: true },
        "cedula": {type: Number, required: true},
        "correo": {type: String, required: true },
        "direccion": {type: String, required: true },
        "experiencia": {type: Number, required: true},
        "genero": {type: String, required: true },
        "fotografia": {type: String, required: true },
    
    });

    let  modelo = mongoose.model("Doctor", schemaDoctor, "doctores");
    module.exports = modelo;
const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({
    "nombre": { type: String, required: true },
    "cedula": { type: String, required: true },
    "telefono": { type: String, required: true },
    "correo": { type: String, required: true, unique: true },
    "direccion": { type: String, required: true },
    "clave": { type: String, required: true },
    "rol": { type: Number, required: true }
});

let modelo = mongoose.model('Usuario', schemaUsuario, 'usuarios');

module.exports = modelo;
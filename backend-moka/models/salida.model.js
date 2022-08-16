const mongoose = require('mongoose');

const schemaSalida = mongoose.Schema({
    "nombre": { type: String, required: true },
    "telefono": { type: String, required: true },
    "correo": { type: String, required: true },
    "mascota": { type: String, required: true },
    "salida": { type: Date, required: true },
    "observacion": { type: String, required: false }
});

let modelo = mongoose.model('Salida', schemaSalida, 'salidas');

module.exports = modelo;
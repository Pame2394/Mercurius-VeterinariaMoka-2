const mongoose = require('mongoose');

const schemaEntrada = mongoose.Schema({
    "nombre": { type: String, required: true },
    "telefono": { type: String, required: true },
    "correo": { type: String, required: true },
    "mascota": { type: String, required: true },
    "entrada": { type: Date, required: true },
    "observacion": { type: String, required: false }
});

let modelo = mongoose.model('Entrada', schemaEntrada, 'entradas');

module.exports = modelo;
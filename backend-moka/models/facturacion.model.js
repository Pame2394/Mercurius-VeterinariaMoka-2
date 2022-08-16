const mongoose = require('mongoose');

const schemaFacturacion = mongoose.Schema({
    "nombre": { type: String, required: true },
    "telefono": { type: String, required: true },
    "correo": { type: String, required: true, unique: true },
    "monto": { type: String, required: true }
});

let modelo = mongoose.model('Facturacion', schemaFacturacion, 'facturacion');

module.exports = modelo;
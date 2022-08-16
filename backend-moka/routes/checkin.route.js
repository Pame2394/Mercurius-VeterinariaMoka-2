const express = require('express');
const router = express.Router();
const Entrada = require('../models/entrada.model');

router.post('/registrar-entrada', (req, res) => {

    let entradaNueva = new Entrada({
        "nombre": req.body.nombre,
        "telefono": req.body.telefono,
        "correo": req.body.correo,
        "mascota": req.body.mascota,
        "entrada": req.body.entrada,
        "observacion": req.body.observacion
    });

    entradaNueva.save(error => {
        if (error) {
            res.json({
                "msj": "El check-in no se registró",
                error
            });
        } else {
            res.json({
                "msj": "Check-in registrado correctamente"
            });
        }
    });

});

router.get('/listar-entradas', (req, res) => {
    Entrada.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los check-in no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Check-in listados correctamente",
                lista
            });
        }
    });
});

module.exports = router;
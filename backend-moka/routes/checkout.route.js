const express = require('express');
const router = express.Router();
const Salida = require('../models/salida.model');

router.post('/registrar-salida', (req, res) => {

    let salidaNueva = new Salida({
        "nombre": req.body.nombre,
        "telefono": req.body.telefono,
        "correo": req.body.correo,
        "mascota": req.body.mascota,
        "salida": req.body.salida,
        "observacion": req.body.observacion
    });

    salidaNueva.save(error => {
        if (error) {
            res.json({
                "msj": "El check-out no se registró",
                error
            });
        } else {
            res.json({
                "msj": "Check-out registrado correctamente"
            });
        }
    });

});

router.get('/listar-salidas', (req, res) => {
    Salida.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los check-out no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Check-out listados correctamente",
                lista
            });
        }
    });
});

module.exports = router;
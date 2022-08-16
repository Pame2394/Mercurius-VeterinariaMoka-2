const express = require('express');
const router = express.Router();
const Facturacion = require('../models/facturacion.model');

router.post('/registrar-facturacion', (req, res) => {

    let facturacionNueva = new Facturacion({
        "nombre": req.body.nombre,
        "telefono": req.body.telefono,
        "correo": req.body.correo,
        "monto": req.body.monto
    });

    facturacionNueva.save(error => {
        if (error) {
            res.json({
                "msj": "La facturación no se registró",
                error
            });
        } else {
            res.json({
                "msj": "Facturación registrada correctamente"
            });
        }
    });

});

router.get('/listar-facturacion', (req, res) => {
    Facturacion.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Las facturaciones no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Facturaciones listadas correctamente",
                lista
            });
        }
    });
});

router.delete('/eliminar-facturacion', (req, res) => {
    Facturacion.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": "La facturación no se pudo eliminar",
                error
            });
        } else {
            res.json({
                "msj": "Facturación eliminada correctamente",
            });
        }
    });
});

module.exports = router;
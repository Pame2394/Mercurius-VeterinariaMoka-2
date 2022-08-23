const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/registrar-usuario', (req, res) => {

    let usuarioNuevo = new Usuario({
        "nombre": req.body.nombre,
        "cedula": req.body.cedula,
        "telefono": req.body.telefono,
        "correo": req.body.correo,
        "direccion": req.body.direccion,
        "clave": req.body.clave,
        "rol": req.body.rol,
        "foto": req.body.foto
    });

    usuarioNuevo.save(error => {
        if (error) {
            res.json({
                "msj": "El usuario no se registró",
                error
            });
        } else {
            res.json({
                "msj": "Usuario registrado correctamente"
            });
        }
    });

});

router.get('/listar-usuarios', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los usuarios no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Usuarios listados correctamente",
                lista
            });
        }
    });
});

router.delete('/eliminar-usuario', (req, res) => {
    Usuario.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": "El usuario no se pudo eliminar",
                error
            });
        } else {
            res.json({
                "msj": "Usuario eliminado correctamente",
            });
        }
    });
});

module.exports = router;
'use strict';

const boton_foto = document.getElementById('btn-foto');
const imagen = document.getElementById('foto-usuario');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'mercurius-cenfotec',
    uploadPreset: 'mercurius'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        imagen.src = result.info.secure_url;
    }

});

boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();

}, false);
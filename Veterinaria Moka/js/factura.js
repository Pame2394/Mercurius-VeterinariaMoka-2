factura = JSON.parse(localStorage.getItem('datosFactura'));

const llenarTabla = () => {

    document.querySelector('#nombre-factura').textContent = factura.nombre;
    document.querySelector('#telefono-factura').textContent = factura.telefono;
    document.querySelector('#correo-factura').textContent = factura.correo;
    document.querySelector('#monto-factura').textContent = factura.monto;

};

llenarTabla();
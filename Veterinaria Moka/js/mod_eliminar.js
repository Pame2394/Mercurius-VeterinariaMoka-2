const btnModificar = document.getElementsByClassName('btn-modificar');
const btnEliminar = document.getElementsByClassName('btn-eliminar');

for (const modificar of btnModificar) {
    modificar.addEventListener('click', function onClick() {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos Modificados',
            'text': '¡Los datos han sido modificados correctamente!',
            'confirmButtonText': '¡OK!'
        });
    });
}

for (const eliminar of btnEliminar) {
    eliminar.addEventListener('click', function onClick() {
        Swal.fire({
            title: '¿Está seguro que desea eliminar la información?',
            text: "",
            text: "La acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Registro eliminado!',
                    'El dato seleccionado fue borrado',
                    'success'
                )
            }
        });
    });
}
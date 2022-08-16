let usuarios = [];
const llenarArregloUsuarios = async() => {
    usuarios = await getDatos('listar-usuarios');
};
llenarArregloUsuarios();
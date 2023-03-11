const { request, response } = require('express');

const esAdminRole = (req = request, res = response, next) => {
    if ( !req.usuario ) {
        return res.status(500).json({
            msg: 'Verificar el rol sin validacion el token primero'
        });
    }

    const {rol, nombre} = req.usuario;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(500).json({
            msg: `${ nombre } Error este usuario no es Administrador -acceso denegado`
        });
    }

    next();
}
const tieneRole = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Verificar el rol sin validacion el token primero'
            })
        }

        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `verificar si tiene uno de los siguientes roles ${ roles }`
            })
        }

        next();
    }
}

module.exports = {
    tieneRole,
    esAdminRole
}
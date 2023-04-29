const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async(req = request, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No se encontro ningun token'
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRET_KEY_TOKEN);

        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Error de token - no se encontro el usuario en la DB'
            })
        }

        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Error de token - usuario no valido'
            })
        }

        req.usuario = usuario;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validarJWT
}
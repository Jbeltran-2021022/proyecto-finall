const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');
const Producto = require('../models/producto');

const roleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});

    if (!existeRol) {
        throw new Error(`El rol ${ rol } noexiste en la BD`);
    }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});

    if (!emailExiste) {
        throw new Error(`El correo: ${ correo } ya fue registrado en la DB`);
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUser = await Usuario.findById(id);

    if (!existeUser) {
        throw new Error(`El id ${ id } no se encontro en DB`);
    }
}

const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById(id);

    if (!existeCategoria) {
        throw new Error(`El id ${ id } no se encontro en DB`);
    }
}

const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById(id);

    if (!existeProducto) {
        throw new Error(`El id ${ id } no se encontro en DB`);
    }
}

module.exports = {
    roleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}
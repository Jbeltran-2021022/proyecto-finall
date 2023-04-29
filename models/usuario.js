const{Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'por favor ingrese un nombre valido']
    },
    correo: {
        type: String,
        required: [true, 'por favor ingrese un correo valido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'por favor ingrese una contraseña valida']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        
    },
    estado: {
        type: Boolean,
        default: true
    },
    goole: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema)
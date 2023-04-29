const{Schema, model} = require('mongoose');

const RoleSchema = Schema({
    rol: {
        type: String,
        
        required: [true, 'por favor ingrese un nombre valido']
    }
});

module.exports = model('Role', RoleSchema);
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    ci: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
    },

});

UsuarioSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Usuario', UsuarioSchema);
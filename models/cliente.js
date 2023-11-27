const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },

});

module.exports = model('Cliente', ClienteSchema);
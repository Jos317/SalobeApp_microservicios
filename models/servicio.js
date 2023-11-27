const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    precio: {
        type: Number,
        required: true,
    },

});

module.exports = model('Servicio', ServicioSchema);
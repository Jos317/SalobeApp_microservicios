const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },

    precio: {
        type: Number,
        required: true,
    },

    cantidad: {
        type: Number,
        required: true,
    },
});

module.exports = model('Producto', ProductoSchema);
const { Schema, model } = require('mongoose');

const DetalleReciboSchema = Schema({

    cantidad: {
        type: Number,
        required: true,
    },

    precio: {
        type: Number,
        required: true,
    },

    descuento: {
        type: Number,
        required: true,
    },

    recibo: {
        type: Schema.Types.ObjectId,
        ref: 'Recibo',
        required: true
    },

    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
});

module.exports = model('Detallerecibo', DetalleReciboSchema);
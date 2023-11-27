const { Schema, model } = require('mongoose');

const ReciboSchema = Schema({

    fecha: {
        type: Date,
        required: false,
    },

    total: {
        type: Number,
        required: true,
    },

    trabajadora: {
        type: Schema.Types.ObjectId,
        ref: 'Trabajadora',
        required: true
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },

    cita: {
        type: Schema.Types.ObjectId,
        ref: 'Cita',
        required: true
    },

});

module.exports = model('Recibo', ReciboSchema);
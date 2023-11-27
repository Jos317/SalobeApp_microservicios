const { Schema, model } = require('mongoose');

const CitaSchema = Schema({

    fechaHora: {
        type: Date,
        required: false,
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

});

module.exports = model('Cita', CitaSchema);
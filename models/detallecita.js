const { Schema, model } = require('mongoose');

const DetalleCitaSchema = Schema({

    hora: {
        type: Date,
        required: true,
    },

    cita: {
        type: Schema.Types.ObjectId,
        ref: 'Cita',
        required: true
    },

    servicio: {
        type: Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },
});

module.exports = model('Detallecita', DetalleCitaSchema);
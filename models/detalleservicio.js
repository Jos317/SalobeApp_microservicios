const { Schema, model } = require('mongoose');

const DetalleServicioSchema = Schema({

    cantidad: {
        type: Number,
        required: true,
    },

    servicio: {
        type: Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },

    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: false
    },
});

module.exports = model('Detalleservicio', DetalleServicioSchema);
const { Schema, model } = require('mongoose');

const TrabajadoraSchema = Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    especialidad: {
        type: String,
        required: true,
    },

    horario: {
        type: Date,
        required: true,
    },

});

module.exports = model('Trabajadora', TrabajadoraSchema);
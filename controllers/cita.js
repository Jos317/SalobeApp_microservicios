const { ObjectId } = require('mongodb');
const { response } = require("express");
const Cita = require('../models/cita');
const detallecita = require("../models/detallecita");

const getCita = async (req, res = response) => {
    const { clienteId } = req.body;

    const myCitas = await Cita.find({ cliente: ObjectId(clienteId) });
    res.json({
        ok: true,
        myCitas,
    });
};

const getAllCitas = async (req, res = response) => {

    const myCitas = await Cita.find();
    res.json({
        ok: true,
        myCitas,
    });
};

const crearCita = async (req, res = response) => {
    try {
        const { fechaHora, trabajadoraId, clienteId, detalles } = req.body;

        const nuevaCita = new Cita({
            fechaHora,
            trabajadora: ObjectId(trabajadoraId),
            cliente: ObjectId(clienteId),
        });
        await nuevaCita.save();

        for (var i = 0; i < detalles.length; i++) {
            var detalleC = new detallecita({
                hora: fechaHora,
                cita: ObjectId(nuevaCita._id),
                servicio: ObjectId(detalles[i].servicio),
            });
            await detalleC.save();
        }
        res.json({
            ok: true,
            body: "Se ingresó bien",
        });
    } catch (e) {
        res.json({
            ok: false,
            body: e.message,
        });
    }
};

module.exports = { getCita, crearCita, getAllCitas };
const { ObjectId } = require('mongodb');
const { response } = require("express");
const Servicio = require("../models/servicio");
const detalleservicio = require("../models/detalleservicio");

const getServicio = async (req, res = response) => {
    const myServicio = await Servicio.find();

    res.json({
        ok: true,
        myServicio,
    });
};

const crearServicio = async (req, res = response) => {
    try {
        const { nombre, precio, detalles } = req.body;

        const nuevoServicio = new Servicio({ nombre, precio });
        await nuevoServicio.save();

        for (var i = 0; i < detalles.length; i++) {
            var detalleS = new detalleservicio({
                cantidad: detalles[i].cantidad,
                servicio: ObjectId(nuevoServicio._id),
                producto: ObjectId(detalles[i].producto),
            });
            await detalleS.save();
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

module.exports = { getServicio, crearServicio };
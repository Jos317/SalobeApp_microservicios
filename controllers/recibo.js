const { ObjectId } = require('mongodb');
const { response } = require("express");
const Recibo = require('../models/recibo');
const detallerecibo = require('../models/detallerecibo');
const producto = require('../models/producto');

const getRecibo = async (req, res = response) => {
    const { trabajadoraId } = req.body;

    const myRecibos = await Recibo.find({ trabajadora: ObjectId(trabajadoraId) });
    res.json({
        ok: true,
        myRecibos,
    });
};

const crearRecibo = async (req, res = response) => {
    try {
        const { fecha, total, citaId, clienteId, trabajadoraId, detalles } = req.body;

        const nuevoRecibo = new Recibo({
            fecha,
            total,
            trabajadora: ObjectId(trabajadoraId),
            cliente: ObjectId(clienteId),
            cita: ObjectId(citaId)
        });
        await nuevoRecibo.save();

        for (const detalle of detalles) {
            const detalleRecibo = new detallerecibo({
                cantidad: detalle.cantidad,
                precio: detalle.precio,
                descuento: detalle.descuento,
                recibo: ObjectId(nuevoRecibo._id),
                producto: ObjectId(detalle.producto),
            });
            await detalleRecibo.save();

            await producto.updateOne(
                { _id: detalle.producto },
                { $inc: { cantidad: -detalle.cantidad } }
            );
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

module.exports = { getRecibo, crearRecibo };
const { response } = require("express");
const Trabajadora = require("../models/trabajadora");

const getTrabajadora = async (req, res = response) => {
  const myTrabajadora = await Trabajadora.findOne().populate({
    path: "usuario",
    select: {
      "nombre": 1,
      "apellido": 1,
      "direccion": 1,
      "telefono": 1
    }
  });

  res.json({
    ok: true,
    myTrabajadora,
  });
};


module.exports = { getTrabajadora };
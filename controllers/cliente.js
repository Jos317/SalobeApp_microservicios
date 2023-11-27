const { response } = require("express");
const Cliente = require("../models/cliente");

const getCliente = async (req, res = response) => {
  const myCliente = await Cliente.find();

  res.json({
    ok: true,
    myCliente,
  });
};


module.exports = { getCliente };
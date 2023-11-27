const { ObjectId } = require('mongodb');
const { response } = require("express");
const Usuario = require('../models/usuario');

const getUsers = async (req, res = response) => {

  const usuarios = await Usuario.find({ rol: 'Empleado' });

  res.json({
    ok: true,
    usuarios,
  });
};

const getClientes = async (req, res = response) => {

  const usuarios = await Usuario.find({ rol: 'Cliente' });

  res.json({
    ok: true,
    usuarios,
  });
};


module.exports = { getUsers, getClientes };

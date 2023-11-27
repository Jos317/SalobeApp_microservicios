const { ObjectId } = require('mongodb');
const { response } = require("express");
const Producto = require("../models/producto");

const crearProducto = async (req, res = response) => {
  const producto = new Producto(req.body);

  await producto.save();

  res.json({
    ok: true,
    body: req.body,
  });
};

const editProduct = async (req, res = response) => {
  const id = req.params.id;
  let producto = await Producto.findOneAndUpdate({ _id: id }, { nombre: req.body.nombre, descripcion: req.body.descripcion });

  res.json({
    ok: true,
    body: req.body,
  });
};

const getProduct = async (req, res = response) => {
  const myProducts = await Producto.find();

  res.json({
    ok: true,
    myProducts,
  });
};
const getProductoforId = async (req, res) => {
  const productoId = req.params.codigo;
  const producto = await Producto.findOne({ _id: ObjectId(productoId) });
  res.json({
    ok: true,
    producto: producto
  });
}

const getProducts = async (req, res = response) => {
  const myProducts = await Producto.find().select("nombre");

  res.json({
    ok: true,
    myProducts,
  });
};


module.exports = {
  crearProducto, editProduct, getProduct, getProductoforId, getProducts
};
const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");


// Función para crear el usuario
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya está registrado",
      });
    }

    const usuario = new Usuario(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    // Generar mi JsonWebToken
    const token = await generarJWT(usuario.id);

    res.json({
      ok: true,
      usuario,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

// Función para hacer login con el usuario
const login = async (req, res = response) => {
  
  const { email, password } = req.body;
 
  try {

    const usuarioDB = await Usuario.findOne({email});
    if(!usuarioDB){
      return res.status(404).json({
        ok: false,
        msg: 'Email no encontrado'
      });
    }

    // Validar el password
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    
    if(!validPassword){
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no es válida'
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      usuario: usuarioDB,
      token,
    });
    
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const renewToken = async (req, res = response) => {

  // const uid, uid del usuario
  
  // generar un nuevo JWT, generarGWT(uid)

  // Obtener el usuario por el UID, Usuario.findById....

  const  uid  = req.uid;
  const usuario = await Usuario.findById(uid);
  const token = await generarJWT(uid);

  res.json({
    ok: true,
    usuario,
    token,
  });

}

module.exports = { crearUsuario, login, renewToken };

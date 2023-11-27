const mongoose = require("mongoose");

require('dotenv').config();


const dbConnection = async () => {
  try {
    console.log(process.env.DB);
    await mongoose.connect(process.env.DB);
    console.log('DB Online');

  } catch (error) {
    throw new Error("Error en la base de datos - Hable con el admin.");
  }
};

module.exports = {
  dbConnection,
};

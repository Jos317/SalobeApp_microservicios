
const express = require('express');
const path = require('path');
require('dotenv').config();

//DB config
const { dbConnection } = require('./database/config').dbConnection();

//App de Express
const app = express();

// Lectura y parseo del Body
app.use(express.json());

//Node Server
const server = require('http').createServer(app);

//Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Mis Rutas
app.use('/api/login', require('./routes/auth'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/recibos', require('./routes/recibos'));
app.use('/api/citas', require('./routes/citas'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/trabajadoras', require('./routes/trabajadoras'));
app.use('/api/clientes', require('./routes/clientes'));

const port = process.env.PORT || 3001;

server.listen(port, (err) => {
    if (err) throw new Error(err);
})
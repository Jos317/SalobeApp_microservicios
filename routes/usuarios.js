/*
path: api/usuarios
*/

const { Router } = require('express');
const { getUsers, getClientes } = require('../controllers/usuarios');

const router = Router();

// validarJWT,
router.get('/', getUsers);
router.get('/clientes', getClientes);

module.exports = router;
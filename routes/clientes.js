const { Router } = require("express");
const router = Router();
const { getCliente } = require("../controllers/cliente");

router.get("/", getCliente);

module.exports = router;
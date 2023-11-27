const { Router } = require("express");
const router = Router();
const { getServicio, crearServicio } = require("../controllers/servicio");

router.get("/", getServicio);
router.post("/new", crearServicio);

module.exports = router;
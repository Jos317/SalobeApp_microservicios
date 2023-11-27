const { Router } = require("express");
const router = Router();
const { getRecibo, crearRecibo } = require("../controllers/recibo");

router.get("/", getRecibo);
router.post("/new", crearRecibo);

module.exports = router;
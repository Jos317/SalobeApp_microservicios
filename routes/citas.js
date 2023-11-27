const { Router } = require("express");
const router = Router();
const { getCita, crearCita, getAllCitas } = require("../controllers/cita");

router.get("/", getCita);
router.post("/new", crearCita);
router.get("/all", getAllCitas);

module.exports = router;
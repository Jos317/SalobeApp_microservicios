const { Router } = require("express");
const router = Router();
const { getTrabajadora } = require("../controllers/trabajadora");

router.get("/", getTrabajadora);

module.exports = router;
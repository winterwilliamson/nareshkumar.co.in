const express = require("express")
const router = express.Router();

const controllar = require("./controller")

router.get("/", controllar.home)
router.post("/", controllar.home)

module.exports = router;
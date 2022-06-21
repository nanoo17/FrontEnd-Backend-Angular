//controllador
const TransaccionController = require("../controllers/transaccion.controller")
//express
const express = require("express")
const router = express.Router()

router.post('/create', TransaccionController.createTransaccion)
router.get('/', TransaccionController.getTransacciones)
router.get('/filter', TransaccionController.filterTransacciones)

module.exports = router
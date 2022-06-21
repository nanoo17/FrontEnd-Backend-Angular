const PasajeController = require("../controllers/pasaje.controller")

const express = require("express")
const router = express.Router()

//rutas
router.post('/create', PasajeController.createPasaje)
router.get('/', PasajeController.getPasajes)
router.delete('/delete/:id', PasajeController.deletePasaje)
router.put('/update/:id', PasajeController.updatePasaje)
router.get('/filter', PasajeController.filterPasajes)
router.get('/:id', PasajeController.getPasaje)

module.exports = router
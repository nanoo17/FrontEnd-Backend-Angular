const PersonaController = require("../controllers/persona.controller")

const express = require("express")
const router = express.Router()

//rutas
router.post('/create', PersonaController.createPersona)
router.get('/', PersonaController.getPersonas)
router.get('/:dni', PersonaController.getPersona)

module.exports = router
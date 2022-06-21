const Persona = require("../models/persona")

const PersonaController = {}

PersonaController.createPersona = async (req, res) => {
    const persona = new Persona(req.body)
    try {
        await persona.save()
        res.status(200).json({
            status: 1,
            message: "Persona creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al crear la persona"
        })
    }
}

PersonaController.getPersonas = async (req, res) => {
    try {
        const personas = await Persona.find()
        res.status(200).json(personas)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener las personas"
        })
    }
}

PersonaController.getPersona = async (req, res) => {
    try {
        const dni = req.params.dni
        const persona = await Persona.findOne({dni: dni})
        res.status(200).json(persona)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener la persona"
        })
    }
}

module.exports = PersonaController


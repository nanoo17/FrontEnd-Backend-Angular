const Pasaje = require("../models/pasaje")
const Persona = require("../models/persona")

const PasajeController = {}

PasajeController.createPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body)
    try {
        if (req.body.categoriaPasaje != "m" && req.body.categoriaPasaje != "a" && req.body.categoriaPasaje != "j")
            throw new Error("Categoria de pasaje no valida")


        const persona = await Persona.findOne({ _id: pasaje.pasajero })

        if (!persona) throw new Error("No existe la persona")

        await pasaje.save()
        res.status(200).json({
            status: 1,
            message: "Pasaje creado correctamente",
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al crear el pasaje"
        })
    }
}

PasajeController.getPasajes = async (req, res) => {
    try {
        const pasajes = await Pasaje.find().populate("pasajero")
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener los pasajes"
        })
    }
}

PasajeController.deletePasaje = async (req, res) => {
    try {
        const pasaje = await Pasaje.findById(req.params.id)
        await Pasaje.findByIdAndDelete(pasaje._id)
        res.status(200).json({
            status: 1,
            msg: "Pasaje eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al eliminar el pasaje"
        })
    }
}

PasajeController.updatePasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body)
    try {
        //evaluar categorias
        var categoria = req.body.categoriaPasaje
        if (categoria && categoria != "m" && categoria != "a" && categoria != "j")
            throw new Error("Categoria de pasaje no valida")

        //evaluar id pasajero
        const persona = await Persona.findOne({ _id: pasaje.pasajero })

        if (!persona) throw new Error("No existe la persona")

        await Pasaje.updateOne({ _id: pasaje._id }, pasaje)
        res.status(200).json({
            status: 1,
            message: "Pasaje actualizado correctamente",
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al actualizar el pasaje"
        })
    }
}

PasajeController.filterPasajes = async (req, res) => {
    try {
        const categoria = req.query.categoria
        if (categoria && categoria != "m" && categoria != "a" && categoria != "j")
            throw new Error("Categoria de pasaje no valida")
        const pasajes = await Pasaje.find({ categoriaPasaje: categoria }).populate("pasajero")
        res.status(200).json(pasajes)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al filtrar los pasajes"
        })
    }
}

PasajeController.getPasaje = async (req, res) => {
    try {
        const pasaje = await Pasaje.findById(req.params.id).populate("pasajero")
        res.status(200).json(pasaje)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener el pasaje"
        })
    }
}

module.exports = PasajeController
const Libro = require("../models/libro")

const LibroController = {}

LibroController.createLibro = async (req, res) => {
    var nuevo = new Libro(req.body)
    console.log(req.body)
    try {
        await nuevo.save()
        res.status(200).json({
            status: 1,
            message: "Libro creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al crear el libro"
        })
    }
}

LibroController.getLibros = async (req, res) => {
    try {
        const libros = await Libro.find()
        res.status(200).json(libros)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener los libros"
        })
    }
}

LibroController.deleteLibro = async (req, res) => {
    try {
        const id = req.params.id
        await Libro.findByIdAndDelete(id)
        res.status(200).json({
            status: 1,
            message: "Libro eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al eliminar el libro"
        })
    }
}

LibroController.updateLibro = async (req, res) => {
    var libro = new Libro(req.body)
    try{
        var id = req.params.id
        libro._id = id
        await Libro.updateOne({_id: id}, libro)
        res.status(200).json({
            status: 1,
            msg: "Libro actualizado correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al actualizar el libro"
        })
    }
}

LibroController.filterByDestacados = async (req, res) => {
    try{
        const librosDestacados = await Libro.find({destacado: {$eq: true}})
        res.status(200).json(librosDestacados)
    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 1,
            msg: "Error al filtrar por destacados"
        })
    }
}

module.exports = LibroController
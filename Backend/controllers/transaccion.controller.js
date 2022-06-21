const Transaccion = require("../models/transaccion")

const TransaccionController = {}

TransaccionController.createTransaccion = async (req, res) => {
    var nueva = new Transaccion(req.body)
    try {
        await nueva.save()
        res.status(200).json({
            status: 1,
            message: "Transaccion creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al crear la transaccion"
        })
    }
}

TransaccionController.getTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.find()
        res.status(200).json(transacciones)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener las transacciones"
        })
    }
}

TransaccionController.filterTransacciones = async (req, res) => {
    try {
        const email = req.query.email, origen = req.query.origen, destino = req.query.destino
        //find -> field: {query expresions and options}
        var transacciones = await Transaccion.find()
        if(email) transacciones = await Transaccion.find({emilCliente: email})
        if(origen && destino) transacciones = await Transaccion.find({
            $and: [
                {monedaOrigen: origen}, // sin el {} en el valor porque por defecto es $eq
                {monedaDestino: destino}
            ]
        })
        res.status(200).json(transacciones)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 0,
            msg: "Error al obtener las transacciones"
        })
    }
}

module.exports = TransaccionController

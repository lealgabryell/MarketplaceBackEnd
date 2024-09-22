const Usuario = require('../models/usuario');

exports.listAll = async (req, res) => {
    try {
        const usuario = await Usuario.find()
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//listar um cliente especifico
exports.listOne = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ message:'usario não encontrado'})
    }
}
exports.create = async (req, res) => {
    try {
        const usuario = await Usuario.create(req, res);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//criar varios usuarios
exports.createMany = async (req, res) => {
    try {
        const createMany = await Usuario.createMany(req.body)
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//Atualizar os usuarios 
exports.update = async (req, res) => {
    try {
        const usuario= await Usuario.findById(req.params.id, req.body, {new: true})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//deletar usuarios
exports.delet = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id)
        res.status(204).json(usuario);
    }catch(error) {
        res.status(400).json({ message: error.message, content: usuario })
    }
}
const Usuario = require("../models/usuario");

module.exports = {
  listAll: async (req, res) => {
    try {
      const usuario = await Usuario.find();
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  listOne: async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ message: "usario não encontrado" });
    }
  },
  insertOne: async (req, res) => {
    try {
      const usuario = await Usuario.create(req, res);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  insertMany: async (req, res) => {
    try {
      const usuarios = await Usuario.insertMany(req.body);
      res.status(201).json({
        message: `${usuarios.length} Inseridos com sucesso!`,
        content: usuarios,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      await Usuario.findByIdAndUpdate(req.params.id, req.body);
      const usuarioAtualizado = await Usuario.findById(req.params.id);
      res.status(201).json({
        message: "Atualizado com sucesso!",
        content: usuarioAtualizado,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params.id);
      res.status(204).json({
        message: "Usuário deletado com sucesso!",
        content: usuario,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

const Cliente = require("../models/cliente.js");

module.exports = {
  listAll: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  listOne: async (req, res) => {
    try {
      const cliente = await Cliente.findById(req.params.id);
      res.status(200).json(cliente);
    } catch {
      res.status(404).json({ message: "Cliente não encontrado!" });
    }
  },
  insertOne: async (req, res) => {
    try {
      const cliente = await Cliente.create(req.body);
      res
        .status(201)
        .json({ message: "Inserido com sucesso!", content: cliente });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  insertMany: async (req, res) => {
    try {
      const clientes = await Cliente.insertMany(req.body);
      res.status(201).json({
        message: `${clientes.length} Inseridos com sucesso!`,
        content: clientes,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      await Cliente.findByIdAndUpdate(req.params.id, req.body);
      const clienteAtualizado = await Cliente.findById(req.params.id);
      res.status(201).json({
        message: "Atualizado com sucesso!",
        content: clienteAtualizado,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const cliente = await Cliente.findByIdAndDelete(req.params.id);
      res
        .status(204)
        .json({ message: "Cliente deletado com sucesso!", content: cliente });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

const Produto = require("../models/produto");

module.exports = {
  listAll: async (req, res) => {
    try {
      const produto = await Produto.find();
      res.status(200).json(produto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  listOne: async (req, res) => {
    try {
      const produto = await Produto.findById(req.params.id);
      res.status(200).json(produto);
    } catch (error) {
      res.status(400).json({ message: "O produto não foi encontrado" });
    }
  },
  insertOne: async (req, res) => {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json({
        message: "Os produtos foram criados com sucesso",
        content: produto,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  insertMany: async (req, res) => {
    try {
      const produtos = await Produto.insertMany(req.body);
      res.status(201).json({
        message: `${produtos.length} Inseridos com sucesso!`,
        content: produtos,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      await Produto.findByIdAndUpdate(req.params.id, req.body);
      const produtoAtualizado = await Produto.findById(req.params.id);
      res.status(201).json({
        message: "Atualizado com sucesso!",
        content: produtoAtualizado,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const produto = await Produto.findByIdAndDelete(req.params.id);
      res.status(204).json({
        message: "Produto deletado com sucesso!",
        content: produto,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteAll: async (req, res) => {
    try {
      const produto = await Produto.deleteMany();
      res.status(204).json({
        message: "Produtos deletado com sucesso!",
        content: produto,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

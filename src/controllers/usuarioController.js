const Usuario = require("../models/usuario");
const jwtService = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
      res.status(400).json({ message: "usuário não encontrado" });
    }
  },
  insertOne: async (req, res) => {
    try {
      const user = req.body;
      user.senha = await bcrypt.hash(user.senha, Number(process.env.ROUNDS));
      const usuario = await Usuario.create(req.body);
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
  login: async (req, res) => {
    try {
      const userResult = await Usuario.findOne({ email: req.body.email });
      if (!userResult) throw new Error("Credenciais Inválidas!");

      const { __v, _id, ...user } = userResult;
      if (!user) throw new Error("Credenciais Inválidas!");
      const senhaIsValid = await bcrypt.compare(req.body.senha, user.senha);
      if (!senhaIsValid) throw new Error("Credenciais Inválidas!");
      const token = jwtService.sign(user, process.env.SECRET);
      res
        .status(200)
        .json({ message: "Usuário autorizado com sucesso!", token: token });
    } catch (error) {
      res.status(401).json({ message: "Usuário não autorizado!" });
    }
  },
};

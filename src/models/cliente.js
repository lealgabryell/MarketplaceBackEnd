const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  cpf: { type: String, required: true, unique: true },
  dataRegistro: { type: Date, default: Date.now },
  desconto: { type: Boolean, default: false },
});

module.exports = mongoose.model("clientes", clienteSchema);

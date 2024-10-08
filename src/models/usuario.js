const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  cpf: { type: String, required: true, unique: true },
  dataRegistro: { type: Date, default: Date.now },
  foto: {
    type: String,
    default:
      "https://www.sociedadepraiana.org.br/packages/trustir/exclusiva/img/user_placeholder.png",
  },
});

module.exports = mongoose.model("usuarios", usuarioSchema);

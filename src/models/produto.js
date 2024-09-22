const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  promocao: { type: Boolean, default: false },
  preco: { type: Number, required: true },
  dataLancamento: { type: Date, default: Date.now },
});

module.exports = mongoose.model("produtos", produtoSchema);

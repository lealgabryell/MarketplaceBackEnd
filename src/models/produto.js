const mongoose = require("mongoose");
const path = require('path')

const loading = path.resolve(__dirname, '../../', '/public/loading.svg')

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  marca: { type: String, default: "Marca desconhecida" },
  promocao: { type: Number, default: false },
  preco: { type: Number, required: true },
  dataLancamento: { type: Date, default: Date.now },
  imagem: { type: String, default: loading }
});

module.exports = mongoose.model("produtos", produtoSchema);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const clientRoute = require("./src/routes/clienteRoute");
const productRoute = require("./src/routes/produtoRoute");
const userRoute = require("./src/routes/usuarioRoute");

app.use(express.json());
app.use("/clientes", clientRoute);
app.use("/produtos", productRoute);
app.use("/usuarios", userRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect to MongoDB");
    app.emit("ok");
  })
  .catch((error) => {
    console.log("Erro na conexao", error);
  });

app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado na porta ${process.env.PORT}!`);
  });
});

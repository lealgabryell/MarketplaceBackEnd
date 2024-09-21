const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((error) => {
    console.log("Erro na conexao", error);
  });

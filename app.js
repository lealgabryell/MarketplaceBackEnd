const express = require("express");
const dotenv = require("dotenv");

require("./src/service/database");
dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Servidor Conectad na porta ${process.env.PORT}!`);
});

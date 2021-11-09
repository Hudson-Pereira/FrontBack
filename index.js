const express = require("express"); //importando express
const app = express(); //instanciando express
require("dotenv").config(); //importando .env

const cors = require("cors"); //importando cors

app.use(express.json()); //definindo uso do json

const Conn = require("./models/conn/index"); //importando rota do arquivo de conexao com o banco

Conn(); //funcao para conectar ao banco

app.use(cors()); //antes de qualquer rota
app.options("*", cors()); //antes de qualquer rota

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

const PersonagensRouter = require("./router/personagens.routes");
app.use("/personagens", PersonagensRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor em http://localhost:${process.env.PORT}`);
});

const mongoose = require("mongoose"); // importando mongoose

//criando classe para o banco
const personagensModel = new mongoose.Schema({
  nome: { type: String, required: true },
  imagemUrl: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Personagem = mongoose.model("personagens", personagensModel);

module.exports = Personagem;

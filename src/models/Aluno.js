const mongoose = require("mongoose");
const uuid = require("uuid/v4");

module.exports = new mongoose.Schema(
  {
    id: { type: String, default: uuid },
    nome: String,
    cpf: Number,
    rg: String,
    DataNascimento: Number,
    endereco: String,
    cidade: String,
    estado: String,
    setor: String,
    type: String,
    telefone: String,
    celular: String,
    senha: String,
    active: Boolean,
    email: String
  },
  { collection: "aluno" }
);

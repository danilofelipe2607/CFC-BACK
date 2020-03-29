const mongoose = require("mongoose");
const uuid = require("uuid/v4");

module.exports = new mongoose.Schema({
  id: { type: String, default: uuid },
  name: String,
  email: String,
  age: Number,
  type: String,
  senha: String,
  active: Boolean,
  cpf: Number
}, {collection: 'user'});


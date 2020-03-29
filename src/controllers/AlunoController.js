const AlunoSchema = require("../models/Aluno");
const mongoose = require("mongoose");

module.exports = {
  //   //create post
  async CreateAluno(req, res) {
    const {
      nome,
      cpf,
      rg,
      DataNascimento,
      endereco,
      cidade,
      estado,
      setor,
      type,
      telefone,
      celular,
      senha,
      active,
      email
    } = req.body;

    console.log(nome, "nome");
    const Aluno = await req.mongoConnection.model("Aluno", AlunoSchema).create({
      nome,
      cpf,
      rg,
      DataNascimento,
      endereco,
      cidade,
      estado,
      setor,
      type,
      telefone,
      celular,
      senha,
      active,
      email
    });

    res.json({
      success: true,
      data: await Aluno
    });
  }
};

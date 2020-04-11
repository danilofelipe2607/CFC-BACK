const AlunoSchema = require("../models/Aluno");
const mongoose = require("mongoose");

module.exports = {
  //index(get)

  async indexAluno(req, res) {
    const Aluno = await req.mongoConnection.model("Aluno", AlunoSchema);
    const result = await Aluno.find();

    if (result) {
      res.json(result);
    }
    res.json({ message: "not found" });
  },
  //   //crea,te post
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
      email,
    } = req.body;

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
      email,
    });

    res.json({
      success: true,
      data: await Aluno,
    });
  },
};

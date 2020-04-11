//index,show,store,update,destroy
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const authConfig = require("../config/auth");

module.exports = {
  async validarLogin(req, res) {
    //api sentinela
    // const usuario = await User.find({ email: email, senha: senha });
    // if (usuario.length) {
    //   console.log(usuario);
    //   const { id, name } = usuario[0];

    //   const token = jwt.sign({ id }, process.env.MYSECURITYTOKEN, {
    //     expiresIn: 900 // expires in 15min
    //   });NOt
    //   return res
    //     .status(200)
    //     .send({ auth: true, token: token, id: id, name: name });
    // }
    // return res.status(202).json({ auth: false, error: "USER NOT FOUND" });
    return req.params;
  },

  async store(req, res) {
    const { email, name, senha, age, active, cpf, type } = req.body;
    let user = await User.findOne({ cpf });

    if (!user) {
      user = await User.create({ email, name, senha, age, active, cpf, type });
    }
    return res.json(user);
  },
};
// export const sentinela = { token: "2123123", tenant: "tenant2" };

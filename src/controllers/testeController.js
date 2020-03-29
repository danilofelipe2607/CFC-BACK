const UserSchema = require("../models/User");
const mongoose = require("mongoose");

module.exports = {
  async FuncaoTeste(req, res) {
    // console.log(req.mongoConnection, "mongocon");
    // const User = req.mongoConnection.connectmodel("user", UserSchema);

    const User = await req.mongoConnection.model("User", UserSchema);
    console.log(User, "dasdasdasa");
    res.json({ success: true, data: await User.find() });
  }
};

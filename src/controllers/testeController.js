const UserSchema = require("../models/User");
const mongoose = require("mongoose");

module.exports = {
  async FuncaoTeste(req, res) {
    // console.log(req.mongoConnection, "mongocon");
    // const User = req.mongoConnection.connectmodel("user", UserSchema);

    const User = await req.mongoConnection.model("User", UserSchema);
    const result = await User.find();

    if (result) {
      res.json({ success: true, data: result });
    } else {
      res.json({ message: "not found" });
    }
  },
};

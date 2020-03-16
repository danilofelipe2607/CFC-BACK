const UserSchema = require("../models/User");

module.exports = {
  async FuncaoTeste(req, res) {
    const User = req.mongoConnection.model("User", UserSchema);

    res.json({ success: true, data: await User.find() });
  }
};

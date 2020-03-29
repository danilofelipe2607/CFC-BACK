require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");

const MongoFactory = require("./middleware/MongoFactory");

const app = express();
app.use(cors());
app.use(MongoFactory);
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //retorna arquivos
app.use(routes);

const host = "0.0.0.0";
const port = process.env.PORT || 3335;
app.listen(port, host, function() {
  console.log("Server started.......");
});

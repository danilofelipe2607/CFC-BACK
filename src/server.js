require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
// const mongoose = require("mongoose");
const path = require("path");

const MongoFactory = require("./middleware/MongoFactory");

const app = express();
app.use(cors());
app.use(MongoFactory);
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //retorna arquivos
app.use(routes);

// class MongoConnections {
//   constructor() {
//     this.connectionsClients = [];
//   }
//   static getInstance() {
//     if (!this._intance) {
//       this._intance = new MongoConnections();
//     }

//     return this._intance;
//   }
// }



// const conexao = `mongodb+srv://admin:admin@dbteste-sn9zi.mongodb.net/${tenant}?retryWrites=true&w=majority`;
// console.log(conexao, "conexao");
// mongoose.connect(conexao, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const host = "0.0.0.0";
const port = process.env.PORT || 3335;
app.listen(port, host, function() {
  console.log("Server started.......");
});

// class teste {
//   static _instance;
//   tenant = [];

//   constructor(){
//     setInterval(()=>{

//     }, 1000 * 60)
//   }

//   static getIntance(){
//     if(this._instance){
//       this._instance = new teste();
//     }

//     return this._instance;
//   }
// }

// teste.getIntance().tenant.filter(t => t.id == 1);

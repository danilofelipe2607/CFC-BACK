// const Os = require("../models/Os");
// const User = require("../models/User");

// module.exports = {
//   //index get
//   async index(req, res) {
//     const os = await Os.find();
//     return res.json(os);
//   },

//   //filtro
//   async getFiltro(req, res) {
//     const {
//       responsavel,
//       status,
//       numero,
//       dateInicial,
//       dateFinal,
//       descricao
//     } = req.body;

//     const os = await Os.find({
//       date: { $gte: ISODate(dateInicial), $lte: ISODate(dateFinal) },
//       descricao: descricao,
//       numero: numero
//     });

//     return res.json(os);
//   },
//   //delete OS

//   async deleteOs(req, res) {
//     const { id } = req.params;
//     await Os.findOneAndDelete(id);
//     const os = await Os.find();
//     return res.json(os);
//   },

//   //create post
//   async store(req, res) {
//     // const { filename } = req.file;
//     const {
//       descricao,
//       numero,
//       responsavel,
//       valor,
//       type,
//       description,
//       date,
//       status,
//       tecnico,
//       url,
//       observacao,
//       search
//     } = req.body;

//     const os = await Os.create({
//       descricao,
//       numero,
//       responsavel,
//       valor,
//       type,
//       description,
//       date,
//       status,
//       url,
//       observacao,
//       search
//     });
//     return res.json(os);
//   },

//   async edit(req, res) {
//     console.log("aquiiiiiiiiiiiiiiiii", req.body);
//     console.log("req.params", req.params);
//     const { id } = req.params;
//     const {
//       descricao,
//       numero,
//       responsavel,
//       valor,
//       type,
//       description,
//       date,
//       status,
//       tecnico,
//       url,
//       observacao,
//       search
//     } = req.body;

//     const osAtualiza = await Os.findByIdAndUpdate(id, req.body, {
//       new: true
//     });
//     const os = await Os.find();
//     console.log("osssssss", os);
//     return res.json(os);
//   }
// };

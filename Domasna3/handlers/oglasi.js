// const Oglasi = require("../pkg/oglasi/oglasiShema");

// exports.getAll = async (req, res) => {
//   try {
//     let oglasi = await Oglasi.find();
//     res.status(200).json({
//       status: "success",
//       data: {
//         movies,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// exports.getOne = async (req, res) => {
//   try {
//     const oglasi = await Oglasi.findById(req.params.id);
//     res.status(200).json({
//       status: "success",
//       data: {
//         movie,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// exports.create = async (req, res) => {
//   try {
//     const newOglas = await Oglasi.create(req.body);
//     res.status(201).json({
//       status: "success",
//       data: {
//         oglas: newOglas,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     console.log(req.file);
//     console.log(req.body);

//     const oglasi = await Oglasi.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       status: "success",
//       data: {
//         movie,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// exports.replace = async (req, res) => {
//   try {
//     const oglasi = await Oglasi.findOneAndReplace(
//       { _id: req.params.id },
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     res.status(200).json({
//       status: "success",
//       data: {
//         movie,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: err.message,
//     });
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     await Oglasi.findByIdAndDelete(req.params.id);
//     res.status(204).json({
//       status: "success",
//       data: null,
//     });
//   } catch (err) {
//     res.status(404).json({ status: "fail", message: err });
//   }
// };
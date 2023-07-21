const Nedviznini = require("../pkg/nedviznini/nedvizniniSchema");

exports.createNedviznini = async (req, res) => {
    try {
        const newNedviznini = await Nedviznini.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                stan: Nedviznini,
            }
        });
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    }
};
 // Prikazuvanje na site dokumenti vo kolekcijata
exports.getAllNedviznini = async (req, res) => {
  try {
      let nedviznini = await Nedviznini.find();
      res.status(200).json({
          status: "success",
          data: {
              nedviznini,
          },
      });
  } catch(err) {
      res.status(404).json({
          status: "fail",
          message: err
      });
  }
};

 // Promena nekoja vo dokumentot od kolekcijata po ID
 exports.updateNedviznini = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);

    const stan = await Nedviznini.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        stan,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

 // Brisenje na nekoj dokument od kolekcijata po ID
 exports.deleteNedviznini = async (req, res) => {
  try {
    await Nedviznini.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
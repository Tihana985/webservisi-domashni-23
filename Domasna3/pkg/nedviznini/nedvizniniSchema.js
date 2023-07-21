const mongoose = require ("mongoose");

const nedvizniniSchema = new mongoose.Schema({
  vid: {
    type: String,
    required: [true, "Mora da se vnese sto se prodava/izdava"]
  },

  kvadratura: {
    type: Number,
  },

  lokacija: {
    type: String,
  },

  opis: {
    type: String,
  },

  cena: {
    type: Number,
  },
});

const Nedviznini = mongoose.model("Nedviznini", nedvizniniSchema);
module.exports = Nedviznini;
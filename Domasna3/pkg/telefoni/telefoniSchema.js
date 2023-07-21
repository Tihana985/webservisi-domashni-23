const mongoose = require("mongoose");

const telefonSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, "Mora da vnesete model"]
    },
    cena: {
        type: Number
    },
    boja: {
        type: String,
        required: [true, "Mora da vnesete boja"]
    },
    opis: {
            type: String,
            required: [true, "Mora da vnesete opis"]
        },
   
});

const Telefon = mongoose.model("Telefon", telefonSchema);

module.exports = Telefon;
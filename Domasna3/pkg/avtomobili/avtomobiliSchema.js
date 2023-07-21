const mongoose = require("mongoose");

const avtomobilSchema = new mongoose.Schema({
    marka: {
        type: String,
        required: [true, "Mora da vnesete marka"]
    },
    model: {
        type: String,
        required: [true, "Mora da vnesete model"]
    },
    godina: {
        type: Number
    },
    kilometri: {
        type: Number
    },
    opis: {
        type: String,
        required: [true, "Mora da vnesete opis"]
    }, 
    cena: {
        type: Number
    }
});

const Avtomobil = mongoose.model("Avtomobil", avtomobilSchema);

module.exports = Avtomobil;
const mongoose = require("mongoose");

const velosipedSchema = new mongoose.Schema({
    marka: {
        type: String,
        required: [true, "Mora da vnesete marka na velosiped"]
    },
    opis: {
        type: String,
        required: [true, "Mora da vnesete opis"]
    },
    cenaDenari: {
        type: Number
    }
});

const  Velosiped = mongoose.model("Velosiped", velosipedSchema);

module.exports = Velosiped;
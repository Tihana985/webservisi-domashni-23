//? ZA DAMSNA DA SE ZAVRSHI WEB SERVSIOT

//? SHEMATA DA SE SOSTOI OD
//? NASLOV
//? Godina
//? Izelzen
//? imdbRating:
//? metascore:

//? Da se krera CRUD - CREATE- READ - UPDATE - DELETE
//? baza na rutata da e /api/movies
//? Da se stavat 10 filma preku postman so koristenje na raw jason format

//? getAll
//? getOne
//? create
//? update
//? delete


const mongoose = require("mongoose");

// Kreirame blueprint za nasata databaza
const moviesShema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Mora da ima naslov"],
    },
    year: {
        type: Number,
    },
    releaseDate: {
        type: Number,
    },
    imdbRating: {
        type: Number,
        default: 3,
    },
    metascore: {
        type: Number,
    }
});

//* Baza na shemata sto ja definirame
const Movie = mongoose.model("Movie", moviesShema);

module.exports = Movie;
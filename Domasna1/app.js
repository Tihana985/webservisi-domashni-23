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


//? gi povikuvame paketite
const express = require("express");
const db = require("./pkg/db/index");

//? Go povikuvame handlerot
const moviesHandler = require("./handlers/moviesHandler")


//? inicijazilirame aplikacija
const app = express();


//? povikuvame middelwari
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//? izvrsuvanje na init funkcijata so koja funkcija se konektirame so data baza
db.init();

app.get("/api/movies", moviesHandler.getAllMovies);
app.post("/api/movies", moviesHandler.createMovie);
app.get("/api/movies/:id", moviesHandler.getMovie);
app.patch("/api/movies/:id", moviesHandler.updateMovie);
app.delete("/api/movies/:id", moviesHandler.deleteMovie)


//? slusame aplikacija
app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log(`Service started successfully on port ${process.env.PORT}`);
});

//


//? DA SE KE KREIRA WEB SERVIS ILI REST API
//? DA SE KREIRA OGLAS
//? KAKO REKLAMA5
//? I DA SE KREIRA AFTENTIKACIJA (korisnici - logirtanje)
//? DA IMAME KOLEKCIJA SO AVTOMOBILI, VELOSIPEDI, NEDVIZNINI, TELEFONI
//? SITE KORISNICI BEZ RAZLIKA NA LOGIRANJE DA IMMAT PRISTAP DO SITE KOLEKCII
//? SAMO LOGIRANI KORISNI DA MOZE DA KREIRAAT BRISHAT I UPDEJTIRAAT DOKUMENTI VO KOLKECIITE



//! SOAP i REST apinja
//! SOAP - XML za transfer
//! REST - XML i JSON za transfer
//! APIs - Application Programming interace
//! REST - Representational state tranfer
//! NPM INSTALL DOTENV

//! process.env e mesto kade sto nashata aplikacija zivee(okolina)

//! JWT - JSON WEB TOKEN
//* sekogash e statless
//! Logiranje - koga korinsikot se logira, serverot proveruva akdreditacija i generira json web token
//! Avtorizacija - odkoga korisnikot vekje se logiral aplikacijata mu go vrakja nazad tokenot pak do korisnikot vo forma na kukis ili korisnikot go zacuvuva voforma na lokalen storage
//! Verifikacija - koga korisnikot ima rikvest kon serverot so jwt tokenot, serverot prvbo go verifikuva ptopisot od tokenot potoa serverot proveruva dali korisnikot ima dozvola da ja zemi povratnata usluga od rikvestot ili pobaruvanjeto znaci ako potpisot e validen togas korisnikot uspesno ja dobiva uslugata od rikvestot

/////////////////////////////

//* JWT ima tri dela
//-header = cuva informacii za algoritmot koj e upotreben za da se logirame
//-payload = zacuvuvame podatoci od korisnikot i koga e izdaden
//-signature = koj go socinuva hashiraniot heder i payload i e potpisan so taen kluc koj sto go znae samo serverot


// Vo terminal
// npm init -y
// npm install express
// npm install mongoose
// npm install dotenv
// npm install express-jwt 
// npm install jsonwebtoken
// npm install bcryptjs 
// npm install bcrypt
// npm install validato

const express = require ("express");
const jwt = require ("express-jwt");
const db = require("./pkg/db/index")

const avtomobiliHandler = require("./handlers/avtomobiliHandler");
const velosipediHandler = require("./handlers/velosipediHandler");
const nedvizniniHandler = require("./handlers/nedvizniniHandler");
const telefoniHandler = require("./handlers/telefoniHandler");
const authHandler = require ("./handlers/authHandler");

const app = express();
db.init();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
  })
  .unless({
    path: ["/oglas/v1/signup", "/oglas/v1/login", "/oglas/avtomobili", "/oglas/velosipedi", "/oglas/nedviznini", "/oglas/telefoni"]
  })
)

app.post("/oglas/v1/signup", authHandler.signup);
app.post("/oglas/v1/login", authHandler.login);

app.post("/oglas/avtomobili", avtomobiliHandler.createAvtomobil);
app.get("/oglas/avtomobili", avtomobiliHandler.getAllAvtomobili);
app.patch("/oglas/avtomobili/:id", avtomobiliHandler.updateAvtomobil);
app.delete("/oglas/avtomobili/:id", avtomobiliHandler.deleteAvtomobil);

app.post("/oglas/velosipedi", velosipediHandler.createVelosiped);
app.get("/oglas/velosipedi", velosipediHandler.getAllVelosipedi);
app.patch("/oglas/velosipedi/:id", velosipediHandler.updateVelosiped);
app.delete("/oglas/velosipedi/:id", velosipediHandler.deleteVelosiped);

app.post("/oglas/nedviznini", nedvizniniHandler.createNedviznini);
app.get("/oglas/nedviznini", nedvizniniHandler.getAllNedviznini);
app.patch("/oglas/nedviznini/:id", nedvizniniHandler.updateNedviznini);
app.delete("/oglas/nedviznini/:id", nedvizniniHandler.deleteNedviznini);

app.post("/oglas/telefoni", telefoniHandler.createTelefon);
app.get("/oglas/telefoni", telefoniHandler.getAllTelefoni);
app.patch("/oglas/telefoni/:id", telefoniHandler.updateTelefon);
app.delete("/oglas/telefoni/:id", telefoniHandler.deleteTelefon);



app.listen(process.env.PORT, (err)=>{
  if (err){
    return console.log("Server can not start");
  }
  console.log(`Server started successfuly on port ${process.env.PORT}`);
});
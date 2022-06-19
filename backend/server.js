const db = require("./config/sequelize");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./user/model");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const LocalPass = require('./config/passport');

User.sync({force: true}).then(()=>{
    console.log("Deu certo a criação do banco")
})

app.use(cors({
    origin: "http://localhost:3003",
    credentials:true
}))


LocalPass.configuration();

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(LocalPass.passport.initialize());
app.use(LocalPass.passport.session());

app.use(cookieParser("secretcode"))

app.post('/login', LocalPass.passport.authenticate('local', {
    successRedirect: 'http://localhost:3003',
    failureRedirect: 'http://localhost:3003'
}));



require('./user/routes')(app)

var server = app.listen(4000, () =>{
    console.log("Servidor rodando na porta : 4000 no host : "+ server.address().address)
})
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


User.sync({force: true}).then(()=>{
    console.log("Deu certo a criação do banco")
})

app.use(cors({
    origin: "http://localhost:3001",
    credentials:true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))

app.post("/login",(req,res)=>{
    console.log(req.body);
})

app.post("/register",(req,res)=>{
    console.log(req.body);
})

app.get("/user", (req,res)=>{})

var server = app.listen(4000, () =>{
    console.log("Servidor rodando na porta : 4000 no host : "+ server.address().address)
})
require("dotenv").config();

const express = require("express");

const mongo = require("mongodb");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
	extended: true
});

const multer = require("multer");

const app = express();

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.get("/", renderHome);

let db = null;


function renderHome(req, res) {
	res.render("index.ejs");
};

app.listen(process.env.PORT || 5000, () => console.log(`server running on heroku port or 5000`));
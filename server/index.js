//require('dotenv').config();
const express = require("express");
const bodyparser = require("body-parser");
const db = require("../database/mongoDB");
const cors = require("cors");
let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + "/../client/dist"));

app.post("/", function(req, res) {
  console.log("post request on express server on path / ");
  res.send("sucessfull posting in express");
});

app.get("/info", function(req, res) {
  //console.log('get request on express server on path /info ', req.query);
  //res.send('sucessfull get req in express')
});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "";
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));

const postSchema = {
  title: String,
  content: String
};

app.get("/", function(req, res){
  res.render("home", {startingContent: homeStartingContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

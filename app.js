//IMPORTS
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Please Enjoy the Budget App");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found!");
});

module.exports = app;

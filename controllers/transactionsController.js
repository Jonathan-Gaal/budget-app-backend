const express = require("express");
const uuid = require("uuid");
const transactions = express.Router();
const transactionsArr = require("../models/transaction");

const { validatePost, validateURL } = require("../models/logsValidation");

//INDEX
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArr);
});

// SHOW
transactions.get("/:i", (req, res) => {
  const { i } = req.params;
  transactionsArr[i] ? res.json(transactionsArr[i]) : res.redirect("/*");
});

//CREATE
transactions.post("/", validateURL, validatePost, (req, res) => {
  const id = uuid();
  const post = { id, ...req.body };
  transactionsArr.push(post);
  res.json(transactionsArr.at(-1));
});

module.exports = transactions;

const express = require("express");
// transactions.use("uuid");
const transactions = express.Router();
const transactionsArr = require("../models/transaction");
const uuid = require("uuid");

const { validatePost, validateURL } = require("../models/logsValidation");
const app = require("../app");

//INDEX
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArr);
});

// SHOW
transactions.get("/:i", (req, res) => {
  const { i } = req.params;
  transactionsArr[i] ? res.json(transactionsArr[i]) : res.redirect("/*");
});

//CREATE;
transactions.post("/", validateURL, validatePost, (req, res) => {
  const id = uuid.v4();
  const post = { id, ...req.body };
  transactionsArr.push(post);
  res.json(transactionsArr.at(-1));
});

// transactions.post("/", validateURL, validatePost, (req, res) => {
//   transactionsArr.push(req.body);
//   res.json(transactionsArr.at(-1));
// });

//UPDATE
transactions.put("/:i", (req, res) => {
  const { i } = req.params;
  if (transactionsArr[i]) {
    transactionsArr[i] = req.body;
    res.status(200).json(transactionsArr[i]);
  } else {
    res.status(400).redirect("/*");
  }
});

//DELETE
transactions.delete("/:i", (req, res) => {
  const { i } = req.params;
  const deletedTransaction = transactionsArr.splice(i, 1);
  res.status(200)
    ? res.json(deletedTransaction)
    : res.status(400).redirect("/*");
});

module.exports = transactions;

const validateURL = (req, res, next) => {
  console.log("This is a valid url");
  next();
};

const validatePost = (req, res, next) => {
  if (
    typeof req.body.item_name !== "string" ||
    typeof req.body.amount !== "number" ||
    typeof req.body.date !== "string" ||
    typeof req.body.from !== "string" ||
    typeof req.body.category !== "string"
  ) {
    console.log("a data type is incorrct");

    res.redirect("/*");
  } else {
    next();
  }
};

module.exports = { validateURL, validatePost };

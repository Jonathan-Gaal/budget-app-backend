const validateURL = (req, res, next) => {
  console.log("This is a valid url");
  next();
};

const validatePost = (req, res, next) => {
  if (typeof req.body.item_name !== "string") {
    console.log("item name is not string");
    res.redirect("/*");
  }
  if (typeof req.body.amount !== "number") {
    console.log("amount is not number");
    res.redirect("/*");
  }
  if (typeof req.body.from !== "string") {
    console.log("from  is not string");
    res.redirect("/*");
  }
  if (typeof req.body.category !== "string") {
    console.log("category  is not string");
    res.redirect("/*");
  } else {
    next();
  }
};

module.exports = { validateURL, validatePost };

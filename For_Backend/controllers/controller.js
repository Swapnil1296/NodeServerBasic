const thisFunction = (req, res, next) => {
  console.log("THis is called");
  res.send("THis is called");
  next()
};
module.exports = {
  thisFunction,
};

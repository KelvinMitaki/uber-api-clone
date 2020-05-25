const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const create = (req, res) => {
  console.log(req.body);
  res.send({ hi: "there" });
};
module.exports = { greeting, create };

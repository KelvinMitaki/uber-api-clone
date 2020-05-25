const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const create = async (req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.send(driver);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { greeting, create };

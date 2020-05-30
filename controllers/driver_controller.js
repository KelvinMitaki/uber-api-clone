const Driver = require("../models/driver");

const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const index = async (req, res) => {
  const { lng, lat } = req.query;
  const drivers = await Driver.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [lng, lat] },
        spherical: true,
        maxDistance: 200000,
        distanceField: "Point"
      }
    }
  ]);
  res.send(drivers);
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

const edit = async (req, res) => {
  try {
    const driver = await Driver.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(driver);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findOneAndDelete({ _id: req.params.id });
    res.send(driver);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { greeting, create, edit, deleteDriver, index };

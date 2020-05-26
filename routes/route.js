const route = require("express").Router();
const {
  greeting,
  create,
  edit,
  deleteDriver
} = require("../controllers/driver_controller");

route.get("/api", greeting);
route.post("/api/drivers", create);
route.put("/api/drivers/:id", edit);
route.delete("/api/drivers/:id", deleteDriver);

module.exports = route;

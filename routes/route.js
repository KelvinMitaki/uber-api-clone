const route = require("express").Router();
const {
  greeting,
  create,
  edit,
  deleteDriver,
  index
} = require("../controllers/driver_controller");

route.get("/api", greeting);
route.get("/api/drivers", index);
route.post("/api/drivers", create);
route.put("/api/drivers/:id", edit);
route.delete("/api/drivers/:id", deleteDriver);

module.exports = route;

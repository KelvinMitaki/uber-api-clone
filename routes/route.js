const route = require("express").Router();
const { greeting, create } = require("../controllers/driver_controller");

route.get("/api", greeting);
route.post("/api/drivers", create);

module.exports = route;

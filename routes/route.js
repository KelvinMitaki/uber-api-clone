const route = require("express").Router();
const { greeting, create, edit } = require("../controllers/driver_controller");

route.get("/api", greeting);
route.post("/api/drivers", create);
route.put("/api/drivers/:id", edit);

module.exports = route;

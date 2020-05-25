const route = require("express").Router();
const { greeting } = require("../controllers/driver_controller");

route.get("/api", greeting);

module.exports = route;

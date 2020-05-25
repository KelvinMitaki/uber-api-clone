const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/route");

const app = express();

// connect to mongo db
mongoose.connect("mongodb://127.0.0.1/uber");

app.use(bodyParser.json());
app.use(routes);

module.exports = app;

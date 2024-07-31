const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");
const filterProperties = require("./filterProperties");

app.use(cors());
app.use(express.json());

app.get("/properties", (request, response) => {
  const filteredProperties = filterProperties(properties);
  response.send(filteredProperties);
});

module.exports = app;

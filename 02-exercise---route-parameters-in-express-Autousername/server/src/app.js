const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");
const getPropertyById = require("./getPropertyById");

app.use(cors());
app.use(express.json());

app.get("/properties", (request, response) => {
  return response.status(200).send(properties);
});

app.get("/properties/:id", ({ params: { id } }, response) => {
  const property = getPropertyById(properties, id);

  property ? response.status(200).send(property) : response.sendStatus(404);
});

module.exports = app;

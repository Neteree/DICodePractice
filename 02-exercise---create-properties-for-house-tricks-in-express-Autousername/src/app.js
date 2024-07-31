const express = require("express");
const app = express();
const PropertyModel = require("./models/PropertyModel");
const formatProperty = require("./utils/formatProperty");
const isValidId = require("./utils/isValidId");

app.use(express.json());

app.get("/properties", async (req, res) => {
  const properties = await PropertyModel.find({}).lean();

  const formattedProperties = properties.map((property) => {
    return formatProperty(property);
  });

  res.send(formattedProperties);
});

app.get("/properties/:id", async (req, res) => {
  if (isValidId(req.params.id)) {
    const property = await PropertyModel.findById(req.params.id).lean();
    if (property) {
      const formattedProperty = formatProperty(property);
      res.send(formattedProperty);
    } else {
      res.status(404).send({ message: "id not found" });
    }
  } else {
    res.status(400).send({ message: "id provided is invalid" });
  }
});

app.post("/properties", async (req, res) => {
  const property = await PropertyModel.create(req.body);

  res.status(200).send(property);
});

module.exports = app;

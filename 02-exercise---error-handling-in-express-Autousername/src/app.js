const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PropertyModel = require("./models/PropertyModel");
const formatProperty = require("./formatProperty");
const { ceil } = require("lodash");

app.use(express.json());

app.post("/properties", async (req, res, next) => {
  try {
    const { body } = req;
    const property = new PropertyModel(body);
    await property.save();
    return res.status(201).send(formatProperty(property));
  } catch (error) {
    if (error.name === "ValidationError") {
      error.status = 400;
    }
    next(error);
  }
});

app.get("/properties", async (req, res) => {
  const properties = await PropertyModel.find({});
  return res.status(200).send(properties.map(formatProperty));
});

app.get("/properties/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "bad id" });
  }

  const property = await PropertyModel.findById(id);

  if (property === null) {
    return res.status(404).send("not found");
  }

  return res.status(200).send(formatProperty(property));
});

module.exports = app;

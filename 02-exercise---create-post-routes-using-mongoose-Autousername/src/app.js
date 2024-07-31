const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");

app.use(express.json());

const endpoints = ["/wishlists", "/orders", "/policies"];
const models = [WishlistModel, OrderModel, PolicyModel];

endpoints.forEach((endpoint, i) => {
  app.post(endpoint, async (req, res) => {
    const doc = await models[i].create(req.body);
    res.send(doc);
  });

  app.get(`${endpoint}/:id`, async (req, res) => {
    const doc = await models[i].findById(req.params.id);
    res.send(doc);
  });
});

module.exports = app;

const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");

app.use(express.json());

app.post("/wishlists", async (req, res) => {
  const { body } = req;
  const wishlist = new WishlistModel(body);
  await wishlist.save();
  return res.status(200).send(wishlist);
});

app.post("/orders", async (req, res) => {
  const { body } = req;
  const order = new OrderModel(body);
  await order.save();
  return res.status(200).send(order);
});

app.post("/policies", async (req, res) => {
  const { body } = req;
  const policy = new PolicyModel(body);
  await policy.save();
  return res.status(200).send(policy);
});

module.exports = app;

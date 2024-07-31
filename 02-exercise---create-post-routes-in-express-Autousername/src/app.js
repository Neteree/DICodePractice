const express = require("express");
const app = express();

// Use this function to get a random id
// eg: `const id = generateId();`
const generateId = require("./generateId");

app.use(express.json());

const endpoints = ["/wishlists", "/orders", "/policies"];

for (const endpoint of endpoints) {
  app.post(endpoint, (req, res) => {
    res.send({ id: generateId(), ...req.body });
  });
}

module.exports = app;

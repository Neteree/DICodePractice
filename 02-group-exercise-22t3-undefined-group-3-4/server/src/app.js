const express = require("express");
const cors = require("cors");
const app = express();
const chirps = require("./chirps.json");

app.use(cors());
app.use(express.json());

app.get("/chirps", (req, res) => {
  res.status(200).send(chirps);
});

app.get("/chirps/:id", (req, res) => {
  res.status(200).send(chirps[req.params.id - 1]);
});

app.post("/chirps", (request, response) => {
  const chirp = {
    ...request.body,
    chirpId: chirps.length + 1,
    date: "2023-01-27T03:23:43.233Z",
    rechirps: 0,
    replies: 0,
  };

  if (chirp.uniqueName === "@Jeph") {
    chirp.userName = "Jeph";
    chirp.userImage = "jeph.gif";
  }

  chirps.push(chirp);
  response.status(201).send(chirp);
});

module.exports = app;

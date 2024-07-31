const express = require("express");
const cors = require("cors");
const app = express();
const chirpModel = require("../models/ChirpModel");
const formatChirp = require("./formatChirp");

app.use(cors());
app.use(express.json());

app.get("/chirps", async (request, response) => {
  const chirps = await chirpModel.find({}).lean();
  const formattedChirps = chirps.map((chirp) => {
    return formatChirp(chirp);
  });
  response.send(formattedChirps);
});

app.get("/chirps/:id", async (request, response) => {
  const { id } = request.params;
  const chirp = await chirpModel.findById(id).lean();
  const formattedChirp = formatChirp(chirp);

  response.send(formattedChirp);
});

app.post("/chirps", async (request, response) => {
  const chirpBody = {
    ...request.body,
    likes: 0,
    rechirps: 0,
    replies: 0,
  };

  switch (chirpBody.uniqueName) {
    case "@Jeph": {
      chirpBody.userName = "Jeph";
      chirpBody.avatar = "jeph.png";
      break;
    }
  }

  const chirp = new chirpModel(chirpBody);
  await chirp.save();

  response.status(201).send(chirp);
});

module.exports = app;

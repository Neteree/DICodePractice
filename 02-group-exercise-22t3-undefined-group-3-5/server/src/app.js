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

// app.post("/chirps", (request, response) => {
//   const chirp = {
//     ...request.body,
//     chirpId: chirps.length + 1,
//     date: "2023-01-27T03:23:43.233Z",
//     rechirps: 0,
//     replies: 0,
//   };

//   if (chirp.uniqueName === "@Jeph") {
//     chirp.userName = "Jeph";
//     chirp.userImage = "jeph.gif";
//   }

//   chirps.push(chirp);
//   response.status(201).send(chirp);
// });

module.exports = app;

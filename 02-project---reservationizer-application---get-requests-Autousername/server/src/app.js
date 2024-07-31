const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const reservationModel = require("./models/ReservationModel");
const formatReservation = require("./utils/formatReservation");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (req, res) => {
  const reservations = await reservationModel.find({}).lean();

  const formattedReservations = reservations.map((reservation) => {
    return formatReservation(reservation);
  });

  res.status(200).send(formattedReservations);
});

app.get("/reservations/:id", async (req, res) => {
  const { id } = req.params;

  if (validId(id)) {
    const reservation = await reservationModel.findById(id).lean();

    if (reservation) {
      const formattedReservation = formatReservation(reservation);
      res.status(200).send(formattedReservation);
    } else {
      res.status(404).send({ message: "id not found" });
    }
  } else {
    res.status(400).send({ message: "id provided is invalid" });
  }
});

module.exports = app;

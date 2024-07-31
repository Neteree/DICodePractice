// FIXME export a model for Reservations
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema({
  partySize: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
});

const Reservations = mongoose.model("Reservations", reservationSchema);

module.exports = Reservations;

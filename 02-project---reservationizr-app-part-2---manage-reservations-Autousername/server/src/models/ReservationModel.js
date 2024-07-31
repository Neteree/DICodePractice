// FIXME: Add a Mongoose model here
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema(
  {
    partySize: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    restaurantName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;

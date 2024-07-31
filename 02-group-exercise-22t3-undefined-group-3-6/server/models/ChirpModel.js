// FIXME export a model for Chirps
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chirpsSchema = new Schema(
  {
    userName: { type: String, required: true },
    uniqueName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    text: { type: Array, required: true },
    avatar: { type: String, required: true },
    replies: { type: Number, reuqired: true },
    rechirps: { type: Number, required: true },
    likes: { type: Number, required: true },
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

const Chirps = mongoose.model("Chirps", chirpsSchema);

module.exports = Chirps;

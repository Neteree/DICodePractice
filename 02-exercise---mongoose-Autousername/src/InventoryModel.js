const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventorySchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  size: {
    h: Number,
    w: Number,
    uom: String,
  },
  status: {
    type: String,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;

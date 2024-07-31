const mongoose = require("mongoose");

const generateId = () => {
  return mongoose.Types.ObjectId().toString();
};

module.exports = generateId;

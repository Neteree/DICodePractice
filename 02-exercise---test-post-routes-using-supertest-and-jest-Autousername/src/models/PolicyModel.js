const mongoose = require("mongoose");
const { Schema } = mongoose;

const policySchema = new Schema(
  {
    planType: { type: String, required: true },
    petsName: { type: String, required: true },
    customersName: { type: String, required: true },
    expiry: { type: Date, required: true },
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

const Policy = mongoose.model("Policy", policySchema);
module.exports = Policy;

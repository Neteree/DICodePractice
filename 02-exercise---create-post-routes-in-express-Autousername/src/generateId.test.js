const generateId = require("./generateId");
const mongoose = require("mongoose");

describe("generateId", () => {
  it("should generate a random id that is compatible with a Mongo Object id", () => {
    const id = generateId();
    expect(id).toBeTruthy();
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    expect(isValidId).toEqual(true);
  });
});

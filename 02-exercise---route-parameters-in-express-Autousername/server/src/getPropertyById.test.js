const getPropertyById = require("./getPropertyById");

const properties = [{ id: "a" }, { id: "b" }, { id: "c" }];

describe("getPropertyById", () => {
  it("should get a single property by its id", () => {
    actualOutput = getPropertyById(properties, "a");
    expectedOutput = { id: "a" };

    expect(actualOutput).toEqual(expectedOutput);
  });

  it("should return undefined if no properties correspond with the given id", () => {
    actualOutput = getPropertyById(properties, "nonExistentId");
    expectedOutput = undefined;

    expect(actualOutput).toEqual(expectedOutput);
  });
});

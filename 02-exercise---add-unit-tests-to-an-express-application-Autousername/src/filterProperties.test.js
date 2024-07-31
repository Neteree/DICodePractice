const filterProperties = require("./filterProperties");
const properties = require("./properties.json");

describe("filterProperties", () => {
  it("Should filter out private properties", () => {
    const actualOutput = filterProperties(properties);
    const expectedOutput = [properties[0], properties[2]];

    expect(actualOutput).toEqual(expectedOutput);
  });
});

const filterProperties = require("./filterProperties");
const properties = require("./properties.json");

describe("filterProperties", () => {
  it("should filter properties that have private set to true", () => {
    const result = filterProperties(properties);
    const expected = [properties[0], properties[2]];

    expect(result).toEqual(expected);
  });
});

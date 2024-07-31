const isValidId = require("./isValidId");

describe("isValidId", () => {
  test("Returns true if the id is valid", () => {
    const id = "61480db44ab0cf7175467757";
    const actualOutput = isValidId(id);

    expect(actualOutput).toBe(true);
  });

  test("Returns false if the id is invalid", () => {
    const id = "invalid-id";
    const actualOutput = isValidId(id);

    expect(actualOutput).toBe(false);
  });
});

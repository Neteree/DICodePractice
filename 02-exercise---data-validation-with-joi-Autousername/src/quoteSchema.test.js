const quoteSchema = require("./quoteSchema");

describe("quoteSchema", () => {
  it("should require a planType", async () => {
    expect.assertions(2);
    const valid = {
      planType: "abc",
      petName: "abc",
      expiry: new Date("2100-12-25"),
    };
    const receivedValid = await quoteSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = {
        petName: "abc",
        expiry: new Date("2100-12-25"),
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"planType" is required');
    }
  });

  it("should require planType to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = {
        planType: 123,
        petName: "abc",
        expiry: new Date("2100-12-25"),
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"planType" must be a string');
    }
  });

  it("should require a petName", async () => {
    expect.assertions(2);
    const valid = {
      planType: "abc",
      petName: "abc",
      expiry: new Date("2100-12-25"),
    };
    const receivedValid = await quoteSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = {
        planType: "abc",
        expiry: new Date("2100-12-25"),
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"petName" is required');
    }
  });

  it("should require petName to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = {
        planType: "abc",
        petName: 123,
        expiry: new Date("2100-12-25"),
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"petName" must be a string');
    }
  });

  it("should require an expiry", async () => {
    expect.assertions(2);
    const valid = {
      planType: "abc",
      petName: "abc",
      expiry: new Date("2100-12-25"),
    };
    const receivedValid = await quoteSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = {
        planType: "abc",
        petName: "abc",
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"expiry" is required');
    }
  });

  it("should require expiry to be greater than now", async () => {
    expect.assertions(1);
    try {
      const invalid = {
        planType: "abc",
        petName: "abc",
        expiry: new Date(),
      };
      await quoteSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"expiry" must be greater than "now"');
    }
  });
});

const productSchema = require("./productSchema");

describe("productSchema", () => {
  it("should require a title", async () => {
    expect.assertions(2);
    const valid = { title: "abc", price: 10, description: "abc" };
    const receivedValid = await productSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = { price: 10, description: "abc" };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"title" is required');
    }
  });

  it("should require title to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = { title: 123, price: 10, description: "abc" };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"title" must be a string');
    }
  });

  it("should require a price", async () => {
    expect.assertions(2);
    const valid = { title: "abc", price: 10, description: "abc" };
    const receivedValid = await productSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = { title: "abc", description: "abc" };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"price" is required');
    }
  });

  it("should require price to be greater than 0", async () => {
    expect.assertions(1);
    try {
      const invalid = { title: "abc", price: -10, description: "abc" };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual(
        '"price" must be greater than or equal to 0'
      );
    }
  });

  it("should allow an optional image", async () => {
    expect.assertions(1);
    const valid = { title: "abc", price: 10, description: "abc", image: "abc" };
    const receivedValid = await productSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);
  });

  it("should require image to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = {
        title: "abc",
        price: 10,
        description: "abc",
        image: 123,
      };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"image" must be a string');
    }
  });

  it("should require a description", async () => {
    expect.assertions(2);
    const valid = { title: "abc", price: 10, description: "abc" };
    const receivedValid = await productSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = { title: "abc", price: 10 };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"description" is required');
    }
  });

  it("should require description to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = { title: "abc", price: 10, description: 123 };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"description" must be a string');
    }
  });

  it("should ensure description is 170 characters max", async () => {
    expect.assertions(1);

    try {
      const invalid = {
        title: "abc",
        price: 10,
        description:
          "5yFH4uMTVOGYmrbdJKCpPQKXtEFGS0syZfuEovSKYduIpCRI4rkQvHtS3fGFFGr0Z69aXODvJ7qNA6IkYf7KrPMdWxaMo8Br3Mgj9MtrFF2tH27ZcVRDxqJG144lF9COt7yNroVLcgF4zT7wrzOLsTpY3Yr2xh3w5wwdf9vd4yl",
      };
      await productSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual(
        '"description" length must be less than or equal to 170 characters long'
      );
    }
  });
});

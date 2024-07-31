const loginSchema = require("./loginSchema");

describe("loginSchema", () => {
  it("should require a username", async () => {
    expect.assertions(2);
    const valid = { username: "abc", password: "abc" };
    const receivedValid = await loginSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = { password: "abc" };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"username" is required');
    }
  });

  it("should require username to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = { username: 123, password: "abc" };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"username" must be a string');
    }
  });

  it("should require username to be only alphanumeric characters", async () => {
    expect.assertions(1);
    try {
      const invalid = { username: "abc!@#$%^&*(", password: "abc" };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual(
        '"username" must only contain alpha-numeric characters'
      );
    }
  });

  it("should require username to between 3 and 30 characters", async () => {
    expect.assertions(2);
    try {
      const invalid = { username: "ab", password: "abc" };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual(
        '"username" length must be at least 3 characters long'
      );
    }

    try {
      const invalid = {
        username: "abcdefghijklmnopqrstuvwxyzabcde",
        password: "abc",
      };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual(
        '"username" length must be less than or equal to 30 characters long'
      );
    }
  });

  it("should require a password", async () => {
    expect.assertions(2);
    const valid = { username: "abc", password: "abc" };
    const receivedValid = await loginSchema.validateAsync(valid);
    expect(receivedValid).toEqual(valid);

    try {
      const invalid = { username: "abc" };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"password" is required');
    }
  });

  it("should require password to be a string", async () => {
    expect.assertions(1);
    try {
      const invalid = { username: "abc", password: 123 };
      await loginSchema.validateAsync(invalid);
    } catch (error) {
      expect(error.message).toEqual('"password" must be a string');
    }
  });
});

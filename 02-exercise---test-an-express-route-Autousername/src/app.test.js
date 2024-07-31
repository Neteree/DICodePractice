const app = require("./app.js");
const request = require("supertest");
const properties = require("./properties.json");
const filterProperties = require("./filterProperties.js");

describe("Server", () => {
  it("Should GET /properties", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedBody = filterProperties(properties);

    // Act
    const response = await request(app).get("/properties");

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });
});

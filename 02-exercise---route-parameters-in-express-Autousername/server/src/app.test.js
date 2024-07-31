const request = require("supertest");
const app = require("./app");
const properties = require("./properties.json");

describe("app", () => {
  it("GET /properties should retrieve a list of properties", async () => {
    const expectedStatus = 200;

    const response = await request(app).get("/properties");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(properties);
  });

  it("Get /properties/1 should retrieve the first property", async () => {
    const expectedStatus = 200;
    const expectedProperty = properties[0];

    const response = await request(app).get("/properties/1");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedProperty);
  });

  it("Get /properties/3 should retrieve the third property", async () => {
    const expectedStatus = 200;
    const expectedProperty = properties[2];

    const response = await request(app).get("/properties/3");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedProperty);
  });

  it("Get /properties/0 should respond with a 404 not found", async () => {
    const expectedStatus = 404;

    const response = await request(app).get("/properties/0");

    expect(response.status).toBe(expectedStatus);
  });

  it("Get /properties/4 should respond with a 404 not found", async () => {
    const expectedStatus = 404;

    const response = await request(app).get("/properties/4");

    expect(response.status).toBe(expectedStatus);
  });

  it("Get /properties/:nonExistentId should respond with a 404 not found", async () => {
    const expectedStatus = 404;

    const response = await request(app).get("/properties/sdadsda");

    expect(response.status).toBe(expectedStatus);
  });
});

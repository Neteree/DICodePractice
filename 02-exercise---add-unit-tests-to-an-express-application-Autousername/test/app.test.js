const request = require("supertest");
const app = require("../src/app");
const properties = require("../src/properties.json");

describe("app", () => {
  it("should get a list of properties", async () => {
    const privateProperties = [properties[0], properties[2]];
    await request(app)
      .get("/properties")
      .expect((res) => {
        expect(res.body).toEqual(privateProperties);
      })
      .expect(200);
  });
});

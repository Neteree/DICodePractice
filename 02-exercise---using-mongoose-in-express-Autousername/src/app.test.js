const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("GET /properties should respond with a list of properties", async () => {
    const expectedStatus = 200;
    const expectedBody = [
      {
        id: "61480db44ab0cf7175467757",
        askingPrice: "$891822.26",
        description:
          "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
        address: "8 Shasta Pass",
        title: "A Beauty on Shasta",
        img: "https://placeimg.com/640/480/arch",
      },
      {
        id: "61480db44ab0cf7175467755",
        askingPrice: "$876330.57",
        description: "Large Executive townhouse bordering On Town Centre",
        address: "2 Bowman Avenue",
        title: "Bowman Brilliance – Style and Value!",
        img: "https://placeimg.com/642/482/arch",
      },
      {
        id: "61480db44ab0cf7175467756",
        askingPrice: "$946446.87",
        description: "Combining contemporary comforts with a functional layout",
        address: "8237 Moland Hill",
        title: "Rare Moland Hill Stunner",
        img: "https://placeimg.com/644/484/arch",
      },
    ];

    const response = await request(app).get("/properties");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });

  test("GET /properties/:id should respond with a single property", async () => {
    const expectedStatus = 200;
    const expectedBody = {
      id: "61480db44ab0cf7175467757",
      askingPrice: "$891822.26",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
    };

    const response = await request(app).get(`/properties/${expectedBody.id}`);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });
});

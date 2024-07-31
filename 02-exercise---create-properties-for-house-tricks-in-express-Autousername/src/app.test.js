const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("GET /properties returns all properties from the database, 200 OK", async () => {
    const expectedBody = [
      {
        id: "61480db44ab0cf7175467757",
        description:
          "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
        address: "8 Shasta Pass",
        title: "A Beauty on Shasta",
        img: "https://placeimg.com/640/480/arch",
        askingPrice: "$891822.26",
      },
      {
        id: "61480db44ab0cf7175467755",
        description: "Large Executive townhouse bordering On Town Centre",
        address: "2 Bowman Avenue",
        title: "Bowman Brilliance – Style and Value!",
        img: "https://placeimg.com/642/482/arch",
        askingPrice: "$876330.57",
      },
      {
        id: "61480db44ab0cf7175467756",
        description: "Combining contemporary comforts with a functional layout",
        address: "8237 Moland Hill",
        title: "Rare Moland Hill Stunner",
        img: "https://placeimg.com/644/484/arch",
        askingPrice: "$946446.87",
      },
    ];

    const res = await request(app).get("/properties");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expectedBody);
  });

  test("Get /properties/61480db44ab0cf7175467757 returns a single property from the database, 200 OK", async () => {
    const expectedBody = {
      id: "61480db44ab0cf7175467757",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
      askingPrice: "$891822.26",
    };

    const response = await request(app).get(`/properties/${expectedBody.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedBody);
  });

  test('Get /properties/invalid-id responds with { message: "id provided is invalid"}, 400 BAD REQUEST', async () => {
    const expectedBody = { message: "id provided is invalid" };

    const res = await request(app).get("/properties/invalid-id");

    expect(res.status).toBe(400);
    expect(res.body).toEqual(expectedBody);
  });

  test('Get /properties/61480db44ab0cf7175469999 responds with { message: "id not found"}, 404 NOT FOUND', async () => {
    const expectedBody = { message: "id not found" };

    const res = await request(app).get("/properties/61480db44ab0cf7175469999");

    expect(res.status).toBe(404);
    expect(res.body).toEqual(expectedBody);
  });

  test("Post /properties/ creates a new property with an id, 200 OK", async () => {
    const body = {
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
      askingPrice: "$891822.26",
    };

    const res = await request(app).post("/properties").send(body);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.objectContaining(body));
    expect(res.body.id).toBeDefined();
  });
});

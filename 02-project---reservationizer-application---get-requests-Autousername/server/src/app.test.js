const request = require("supertest");
const app = require("./app");
const reservations = require("../../data/reservations.json");
const { response } = require("express");

describe("app", () => {
  test("API GET request /reservations, 200 OK", async () => {
    const expectedStatus = 200;
    const expectedBody = [
      {
        id: "507f1f77bcf86cd799439011",
        partySize: 4,
        date: "2023-11-17T06:30:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Island Grill",
      },
      {
        id: "614abf0a93e8e80ace792ac6",
        partySize: 2,
        date: "2023-12-03T07:00:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Green Curry",
      },
    ];

    const response = await request(app).get("/reservations");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });

  test("API GET request /reservations/507f1f77bcf86cd799439011, 200 OK", async () => {
    const expectedStatus = 200;
    const expectedBody = {
      id: "507f1f77bcf86cd799439011",
      partySize: 4,
      date: "2023-11-17T06:30:00.000Z",
      userId: "614abe145f317b89a2e36883",
      restaurantName: "Island Grill",
    };

    const response = await request(app).get(`/reservations/${expectedBody.id}`);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });

  test("API GET request/reservations/invalid-id, 400 BAD REQUEST", async () => {
    const expectedStatus = 400;
    const expectedBody = {
      message: "id provided is invalid",
    };

    const response = await request(app).get("/reservations/invalid-id");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });

  test("API GET request/reservations/507f1f77bcf86cd799439999, 404 NOT FOUND", async () => {
    const expectedStatus = 404;
    const expectedBody = {
      message: "id not found",
    };

    const response = await request(app).get(
      "/reservations/507f1f77bcf86cd799439999"
    );

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });
});

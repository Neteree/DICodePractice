const request = require("supertest");
const app = require("./app");

describe("app", () => {
  describe("GET /restaurants", () => {
    it("GET /restaurants should respond with all restaurants and 200 OK", async () => {
      const expectedStatus = 200;
      const expectedBody = [
        {
          name: "Curry Place",
          description:
            "Bringing you the spirits of India in the form of best authentic grandma's recipe dishes handcrafted with love by our chefs!",
          image: "https://i.ibb.co/yftcRcF/indian.jpg",
          id: "616005cae3c8e880c13dc0b9",
        },
        {
          name: "Thai Isaan",
          description:
            "We offer guests a modern dining experience featuring the authentic taste of Thailand. Food is prepared fresh from quality ingredients and presented with sophisticated elegance in a stunning dining setting filled with all the richness of Thai colour, sound and art.",
          image: "https://i.ibb.co/HPjd2jR/thai.jpg",
          id: "616005e26d59890f8f1e619b",
        },
        {
          name: "Italian Feast",
          description:
            "From the Italian classics, to our one-of-a-kind delicious Italian favourites, all of our offerings are handcrafted from the finest, freshest ingredients available locally. Whether you're craving Italian comfort food like our Ravioli, Pappardelle or something with a little more Flavour like our famous Fettuccine Carbonara.",
          image: "https://i.ibb.co/0r7ywJg/italian.jpg",
          id: "616bd284bae351bc447ace5b",
        },
      ];

      const response = await request(app).get("/restaurants");

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("GET /restaurants/:id", () => {
    it("GET /restaurants/616005cae3c8e880c13dc0b9 should respond with a single restaurant and 200 OK", async () => {
      const expectedStatus = 200;
      const expectedBody = {
        name: "Curry Place",
        description:
          "Bringing you the spirits of India in the form of best authentic grandma's recipe dishes handcrafted with love by our chefs!",
        image: "https://i.ibb.co/yftcRcF/indian.jpg",
        id: "616005cae3c8e880c13dc0b9",
      };

      const response = await request(app).get(
        "/restaurants/616005cae3c8e880c13dc0b9"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it('GET /restaurants/616005cae3c8e880c13dc0b should respond with {"error": "invalid id provided"} and 400 Bad Request', async () => {
      const expectedStatus = 400;

      const expectedBody = {
        error: "invalid id provided",
      };

      const response = await request(app).get(
        "/restaurants/616005cae3c8e880c13dc0b"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it('GET /restaurants/616005cae3c8e880c13dc0b8 should respond with {"error": "restaurant not found"} and 404 Not Found', async () => {
      const expectedStatus = 404;
      const expectedBody = {
        error: "restaurant not found",
      };

      const response = await request(app).get(
        "/restaurants/616005cae3c8e880c13dc0b8"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("POST /reservations", () => {
    it('POST /reservations should respond with the created reservation and 201 Created instead of { UnauthorizedError: "Unauthorized" } and 401 Unauthorized', async () => {
      const expectedStatus = 201;
      const expectedUserId = "mock-user-id";

      const body = {
        partySize: 4,
        date: "2023-11-17T06:30:00.000Z",
        restaurantName: "Island Grill",
      };

      const response = await request(app).post("/reservations").send(body);

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(
        expect.objectContaining({
          userId: expectedUserId,
          ...body,
        })
      );
      expect(response.body.id).toBeDefined();
    });

    it("POST /reservations should respond with 400 Bad Request when the body is invalid", async () => {
      const expectedStatus = 400;
      const body = {};

      const response = await request(app).post("/reservations").send(body);

      expect(response.status).toBe(expectedStatus);
    });

    it("POST /reservations should respond with 400 Bad Request when the provided party size is not greater or equal to 1", async () => {
      const expectedStatus = 400;
      const expectedBody = {
        statusCode: 400,
        error: "Bad Request",
        message: "Validation failed",
        validation: {
          body: {
            source: "body",
            keys: ["partySize"],
            message: '"partySize" must be greater than or equal to 1',
          },
        },
      };

      const body = {
        partySize: 0,
        date: "2023-11-17T06:30:00.000Z",
        restaurantName: "Island Grill",
      };

      const response = await request(app).post("/reservations").send(body);

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it("POST /reservations should respond with 400 Bad Request when the provided date is in the past", async () => {
      const expectedStatus = 400;
      const expectedBody = {
        statusCode: 400,
        error: "Bad Request",
        message: "Validation failed",
        validation: {
          body: {
            source: "body",
            keys: ["date"],
            message: '"date" must be greater than or equal to "now"',
          },
        },
      };

      const body = {
        partySize: 1,
        date: "2013-11-17T06:30:00.000Z",
        restaurantName: "Island Grill",
      };

      const response = await request(app).post("/reservations").send(body);

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("GET /reservations", () => {
    it("GET /reservations should return all of the users reservations and 200 OK", async () => {
      const expectedStatus = 200;

      const expectedBody = [
        {
          id: "507f1f77bcf86cd799439011",
          partySize: 4,
          date: "2023-11-17T06:30:00.000Z",
          userId: "mock-user-id",
          restaurantName: "Island Grill",
        },
        {
          id: "614abf0a93e8e80ace792ac6",
          partySize: 2,
          date: "2023-12-03T07:00:00.000Z",
          userId: "mock-user-id",
          restaurantName: "Green Curry",
        },
      ];

      const response = await request(app).get("/reservations");

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("Get /reservation/:id", () => {
    it("GET /reservations/507f1f77bcf86cd799439011 should return a single reservation and 200 OK", async () => {
      const expectedStatus = 200;
      const expectedBody = {
        date: "2023-11-17T06:30:00.000Z",
        id: "507f1f77bcf86cd799439011",
        partySize: 4,
        restaurantName: "Island Grill",
        userId: "mock-user-id",
      };

      const response = await request(app).get(
        "/reservations/507f1f77bcf86cd799439011"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it('GET /reservations/507f1f77bcf86cd79943901 should return {"error": "invalid id provided"} and 400 Bad Request', async () => {
      const expectedStatus = 400;
      const expectedBody = { error: "invalid id provided" };

      const response = await request(app).get(
        "/reservations/507f1f77bcf86cd79943901"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it('GET /reservations/507f1f77bcf86cd799439019 should return {"error": "reservation not found"} and 404 Not Found', async () => {
      const expectedStatus = 404;
      const expectedBody = { error: "reservation not found" };

      const response = await request(app).get(
        "/reservations/507f1f77bcf86cd799439019"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });

    it('GET /reservations/507f1f77bcf86cd799439011 should return {"error": "user does not have permission to access this reservation"} and 403 Forbidden', async () => {
      const expectedStatus = 403;
      const expectedBody = {
        error: "user does not have permission to access this reservation",
      };

      const response = await request(app).get(
        "/reservations/61679189b54f48aa6599a7fd"
      );

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toEqual(expectedBody);
    });
  });
});

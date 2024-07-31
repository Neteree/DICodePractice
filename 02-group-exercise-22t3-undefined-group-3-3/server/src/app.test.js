const request = require("supertest");
const app = require("./app");
const chirps = require("./chirps.json");

describe("App", () => {
  it("Should GET /chirps", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedBody = [
      {
        chirpId: 1,
        userName: "RapidAPI",
        uniqueName: "@Rapid_API",
        date: "2023-01-27T03:23:43.233Z",
        message: [
          "Let’s break down the process of building a REST API from scratch using Node.js and Express.",
          "&nbsp;",
          "Thread (emoji) (emoji)",
        ],
        userImage: "path.ex",
        replies: 24,
        rechirps: 420,
        likes: 1300,
      },
      {
        chirpId: 2,
        userName: "Joe Chang",
        uniqueName: "@joe_theCoder",
        date: "2023-02-07T03:23:43.233Z",
        message: [
          "Day51 #100DaysOfCode Finished the first node project, and decide to make it bigger and more presentable after gaining more knowledge in React!!",
        ],
        userImage: "path.ex",
        replies: 3,
        rechirps: 6,
        likes: 7,
      },
      {
        chirpId: 3,
        userName: "Joe Chang",
        uniqueName: "@joe_theCoder",
        date: "2023-04-28T12:23:43.143Z",
        message: [
          "Day 54 of #100DaysOfCode practice with a simple page with React after a long & busy day.",
          "Also, thanks @CodeOnLoop, for being such a wise and supportive friend on this journey!! The dev community are the best!!",
        ],
        userImage: "path.ex",
        replies: 3,
        rechirps: 6,
        likes: 15,
      },
      {
        chirpId: 4,
        userName: "Manpreet Singh",
        uniqueName: "@ManpreetCoderI",
        date: "2023-02-05T03:23:43.233Z",
        message: [
          "How to specify attributes in JSX?",
          "-Using curly braces to embed a javascript expression is an attribute",
          "-Don't put quotes around curly braces when embedding a javascript expression in an attribute",
          "-Define attributes with camelcase naming convention",
          "#javascript #React",
          "(image attached)",
        ],
        userImage: "path.ex",
        replies: 0,
        rechirps: 3,
        likes: 3,
      },
    ];

    // Act
    const response = await request(app).get("/chirps");

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedBody);
  });

  it("Should GET /chirps/1", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedChirp = {
      chirpId: 1,
      userName: "RapidAPI",
      uniqueName: "@Rapid_API",
      date: "2023-01-27T03:23:43.233Z",
      message: [
        "Let’s break down the process of building a REST API from scratch using Node.js and Express.",
        "&nbsp;",
        "Thread (emoji) (emoji)",
      ],
      userImage: "path.ex",
      replies: 24,
      rechirps: 420,
      likes: 1300,
    };

    // Act
    const id = 1;
    const response = await request(app).get(`/chirps/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedChirp);
  });

  it("Should GET /chirps/3", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedChirp = {
      chirpId: 3,
      userName: "Joe Chang",
      uniqueName: "@joe_theCoder",
      date: "2023-04-28T12:23:43.143Z",
      message: [
        "Day 54 of #100DaysOfCode practice with a simple page with React after a long & busy day.",
        "Also, thanks @CodeOnLoop, for being such a wise and supportive friend on this journey!! The dev community are the best!!",
      ],
      userImage: "path.ex",
      replies: 3,
      rechirps: 6,
      likes: 15,
    };

    // Act
    const id = 3;
    const response = await request(app).get(`/chirps/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedChirp);
  });

  it("Should POST /chirps", async () => {
    // Arrange
    const expectedStatus = 201;

    const requestChirp = {
      uniqueName: "@Jeph",
      message: ["What's happening?, how come I’m awake"],
    };

    const expectedChirp = {
      chirpId: 5,
      userName: "Jeph",
      uniqueName: "@Jeph",
      date: "2023-01-27T03:23:43.233Z",
      message: ["What's happening?, how come I’m awake"],
      userImage: "jeph.gif",
      replies: 0,
      rechirps: 0,
    };

    // Act
    const response = await request(app)
      .post("/chirps")
      .send(requestChirp)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedChirp);
  });
});

const request = require("supertest");
const app = require("./app");

describe("App", () => {
  it("Should GET /chirps", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedBody = [
      {
        id: "61480db44ab0cf7175467757",
        username: "RapidAPI",
        uniqueName: "@Rapid_API",
        createdDate: "2022-02-14T16:54:40.000Z",
        text: [
          "Let’s break down the process of building a REST API from scratch using Node.js and Express.",
          "&nbsp;",
          "Thread (emoji) (emoji)",
        ],
        avatar: "path.ex",
        replies: 24,
        rechirps: 420,
        likes: 1300,
      },
      {
        id: "645d80e95bba1f07ec6533f6",
        username: "Joe Chang",
        uniqueName: "@joe_theCoder",
        createdDate: "2022-02-14T16:54:40.000Z",
        text: [
          "Day51 #100DaysOfCode Finished the first node project, and decide to make it bigger and more presentable after gaining more knowledge in React!!",
        ],
        avatar: "path.ex",
        replies: 3,
        rechirps: 6,
        likes: 7,
      },
      {
        id: "645d82976ccabe6744b8c761",
        username: "Joe Chang",
        uniqueName: "@joe_theCoder",
        createdDate: "2022-02-14T16:54:40.000Z",
        text: [
          "Day 54 of #100DaysOfCode practice with a simple page with React after a long & busy day.",
          "Also, thanks @CodeOnLoop, for being such a wise and supportive friend on this journey!! The dev community are the best!!",
        ],
        avatar: "path.ex",
        replies: 3,
        rechirps: 6,
        likes: 15,
      },
      {
        id: "645d82789395efc501ae0e54",
        username: "Manpreet Singh",
        uniqueName: "@ManpreetCoderI",
        createdDate: "2022-02-14T16:54:40.000Z",
        text: [
          "How to specify attributes in JSX?",
          "-Using curly braces to embed a javascript expression is an attribute",
          "-Don't put quotes around curly braces when embedding a javascript expression in an attribute",
          "-Define attributes with camelcase naming convention",
          "#javascript #React",
          "(image attached)",
        ],
        avatar: "path.ex",
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

  it("Should GET /chirps/645d80e95bba1f07ec6533f6", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedChirp = {
      id: "645d82789395efc501ae0e54",
      username: "Manpreet Singh",
      uniqueName: "@ManpreetCoderI",
      createdDate: "2022-02-14T16:54:40.000Z",
      text: [
        "How to specify attributes in JSX?",
        "-Using curly braces to embed a javascript expression is an attribute",
        "-Don't put quotes around curly braces when embedding a javascript expression in an attribute",
        "-Define attributes with camelcase naming convention",
        "#javascript #React",
        "(image attached)",
      ],
      avatar: "path.ex",
      replies: 0,
      rechirps: 3,
      likes: 3,
    };

    // Act
    const id = "645d82789395efc501ae0e54";
    const response = await request(app).get(`/chirps/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedChirp);
  });

  it("Should POST /chirps creates the expected chirp, 201 Created", async () => {
    const requestMessageBody = {
      uniqueName: "@Jeph",
      text: ["hello", "world"],
    };
    const expectedResponseMessageBody = {
      userName: "Jeph",
      uniqueName: "@Jeph",
      text: ["hello", "world"],
      avatar: "jeph.png",
      replies: 0,
      rechirps: 0,
      likes: 0,
    };

    const response = await request(app)
      .post("/chirps")
      .send(requestMessageBody);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining(expectedResponseMessageBody)
    );
    expect(response.body.id).toBeDefined();
    expect(response.body.createdDate).toBeDefined();
  });

  //  it("Should GET /chirps/645d82789395efc501ae0e54", async () => {
  // // Arrange
  // const expectedStatus = 200;
  // const expectedChirp = {
  //   id: "645d82789395efc501ae0e54",
  //   username: "Manpreet Singh",
  //   uniqueName: "@ManpreetCoderI",
  //   createdDate: "2022-02-14T16:54:40.000Z",
  //   text: [
  //     "How to specify attributes in JSX?",
  //     "-Using curly braces to embed a javascript expression is an attribute",
  //     "-Don't put quotes around curly braces when embedding a javascript expression in an attribute",
  //     "-Define attributes with camelcase naming convention",
  //     "#javascript #React",
  //     "(image attached)",
  //   ],
  //   avatar: "path.ex",
  //   replies: 0,
  //   rechirps: 3,
  //   likes: 3,
  // };

  //   // Act
  //   const id = "645d82789395efc501ae0e54";
  //   const response = await request(app).get(`/chirps/${id}`);

  //   // Assert
  //   expect(response.status).toBe(expectedStatus);
  //   expect(response.body).toEqual(expectedChirp);
  // });

  // it("Should POST /chirps", async () => {
  //   // Arrange
  //   const expectedStatus = 201;

  //   const requestChirp = {
  //     uniqueName: "@Jeph",
  //     message: ["What's happening?, how come I’m awake"],
  //   };

  //   const expectedChirp = {
  //     id: 5,
  //     userName: "Jeph",
  //     uniqueName: "@Jeph",
  //     date: "2023-01-27T03:23:43.233Z",
  //     message: ["What's happening?, how come I’m awake"],
  //     userImage: "jeph.gif",
  //     replies: 0,
  //     rechirps: 0,
  //   };

  //   // Act
  //   const response = await request(app)
  //     .post("/chirps")
  //     .send(requestChirp)
  //     .set("Content-Type", "application/json");

  //   expect(response.status).toBe(expectedStatus);
  //   expect(response.body).toEqual(expectedChirp);
  // });
});

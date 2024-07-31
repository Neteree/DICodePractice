const formatChirp = require("./formatChirp.js");

describe("formatChirp", () => {
  it("Should change _id to id", () => {
    const acutualOutput = formatChirp({
      _id: "61480db44ab0cf7175467757",
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
    });

    const expectedOutput = {
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
    };

    expect(acutualOutput).toEqual(expectedOutput);
  });
});

const filterProperties = require("./filterProperties.js");
const properties = require("./properties.json");

describe("Filter properties", () => {
  it("Should return all properties that are not private", () => {
    const actualResult = filterProperties(properties);
    const expectedResult = [
      {
        id: 1,
        askingPrice: "$891822.26",
        description:
          "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
        address: "8 Shasta Pass",
        title: "A Beauty on Shasta",
        img: "https://placeimg.com/640/480/arch",
        private: false,
      },
      {
        id: 3,
        askingPrice: "$946446.87",
        description: "Combining contemporary comforts with a functional layout",
        address: "8237 Moland Hill",
        title: "Rare Moland Hill Stunner",
        img: "https://placeimg.com/640/480/arch",
        private: false,
      },
    ];

    expect(actualResult).toEqual(expectedResult);
  });
});

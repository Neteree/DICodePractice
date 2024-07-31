const formatProperty = require("./formatProperty");

describe("formatProperty", () => {
  it("Should change _id to id", () => {
    const acutualOutput = formatProperty({
      _id: "61480db44ab0cf7175467757",
      askingPrice: "$891822.26",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
    });

    const expectedOutput = {
      id: "61480db44ab0cf7175467757",
      askingPrice: "$891822.26",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
    };

    expect(acutualOutput).toEqual(expectedOutput);
  });
});

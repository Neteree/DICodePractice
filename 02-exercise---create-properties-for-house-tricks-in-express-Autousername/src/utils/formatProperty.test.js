const formatProperty = require("./formatProperty");

describe("formatProperty", () => {
  test("Returns a new property object where the key _id is id instead", () => {
    const actualOutput = formatProperty({
      _id: "61480db44ab0cf7175467757",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
      askingPrice: "$891822.26",
    });

    const expectedOutput = {
      id: "61480db44ab0cf7175467757",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
      askingPrice: "$891822.26",
    };

    expect(actualOutput).toEqual(expectedOutput);
  });
});

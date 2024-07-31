describe("index", () => {
  it("should console.log an array of products under $500", () => {
    global.console.log = jest.fn();
    require("../src/index");
    expect(console.log).toHaveBeenCalledWith([
      { price: 275, title: "Kogan: Z11 Pro Cordless Stick Vacuum Cleaner" },
      { price: 149, title: "Sodastream: Spirit - Starter Pack" },
    ]);
  });
});

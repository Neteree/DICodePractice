const mongoose = require("mongoose");
// const inventoryItems = require("../data/inventory.json");
const InventoryModel = require("./InventoryModel");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});

describe("InventoryModel", () => {
  test("inventory item should validate", (done) => {
    expect.assertions(1);
    const inventory = new InventoryModel({
      item: "journal",
      qty: 25,
      size: { h: 14, w: 21, uom: "cm" },
      status: "A",
    });

    inventory.save((error) => {
      expect(error).toBeFalsy();
      done();
    });
  });

  test("item property should be required", (done) => {
    expect.assertions(1);
    const inventory = new InventoryModel();

    inventory.save((error) => {
      expect(error.errors.item).toBeTruthy();
      done();
    });
  });

  it("qty property should be required", (done) => {
    expect.assertions(1);
    const inventory = new InventoryModel();

    inventory.save((error) => {
      expect(error.errors.qty).toBeTruthy();
      done();
    });
  });

  it("status property should be required", (done) => {
    expect.assertions(1);
    const inventory = new InventoryModel();

    inventory.save((error) => {
      expect(error.errors.status).toBeTruthy();
      done();
    });
  });
});

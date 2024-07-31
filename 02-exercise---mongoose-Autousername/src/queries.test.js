const mongoose = require("mongoose");
const inventoryItems = require("../data/inventory.json");
const InventoryModel = require("./InventoryModel");
const {
  getAllItems,
  getItemById,
  getDamagedItems,
  getLowStockItems,
} = require("./queries");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());

  await InventoryModel.collection.insertMany(inventoryItems);
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});

describe("queries", () => {
  test("getAllItems returns all items", async () => {
    const received = await getAllItems();
    const docs = received.map((doc) => doc._doc);
    const expected = inventoryItems;
    expect(docs).toEqual(expected);
  });

  test("getItemById returns a single item with the correct id", async () => {
    const id = inventoryItems[0]._id;
    const received = await getItemById(id);
    const doc = received._doc;
    const expected = inventoryItems[0];
    expect(doc).toEqual(expected);
  });

  test("getDamagedItems returns items with a status of D", async () => {
    const received = await getDamagedItems();
    const docs = received.map((doc) => doc._doc);
    const expected = [inventoryItems[2], inventoryItems[3]];
    expect(docs).toEqual(expected);
  });

  test("getLowStockItems returns items with a status of A and stock less than 30", async () => {
    const received = await getLowStockItems();
    const docs = received.map((doc) => doc._doc);
    const expected = [inventoryItems[0]];
    expect(docs).toEqual(expected);
  });
});

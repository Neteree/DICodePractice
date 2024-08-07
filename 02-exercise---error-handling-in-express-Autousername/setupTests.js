const mongoose = require("mongoose");
const PropertyModel = require("./src/models/PropertyModel");
const _ = require("lodash");
const { seedData } = require("./seed/seedData");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeEach(async () => {
  await seedData(mongoose);
});

afterEach(async () => {
  await PropertyModel.collection.deleteMany({});
});

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});

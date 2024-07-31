const mongoose = require("mongoose");
const properties = require("./data/properties.json");
const PropertyModel = require("./src/models/PropertyModel");

const { MongoMemoryServer } = require("mongodb-memory-server");

let instance;

beforeAll(async () => {
  instance = await MongoMemoryServer.create();
  await mongoose.connect(instance.getUri());

  // mongoose does not support the "$oid" syntax in the JSON
  // so replace it with a mongoose ObjectId
  const propertiesWithObjectId = properties.map((property) => {
    return {
      ...property,
      _id: new mongoose.Types.ObjectId(property._id.$oid),
    };
  });

  await PropertyModel.collection.insertMany(propertiesWithObjectId);
});

afterAll(async () => {
  await mongoose.disconnect();
  await instance.stop();
});

const Inventory = require("./InventoryModel");

// Return all items from the database
const getAllItems = async () => {
  return await Inventory.find({});
};

// Return an item that matches the id
const getItemById = async (id) => {
  return await Inventory.findById(id);
};

// Return items with a status "D"
const getDamagedItems = async () => {
  return await Inventory.find({ status: "D" });
};

// Return items with a status "A" and qty less than 30
const getLowStockItems = async () => {
  return await Inventory.find({ status: "A", qty: { $lt: 30 } });
};

module.exports = {
  getAllItems,
  getItemById,
  getDamagedItems,
  getLowStockItems,
};

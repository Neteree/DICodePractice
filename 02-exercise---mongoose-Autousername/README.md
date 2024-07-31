[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11096223&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Mongoose 

## Brief

You are building an application for some inventory management software. You need to query MongoDB to find items that match certain scenarios required by the business.

In this exercise, you will be writing a schema, model, and queries using [Mongoose](https://mongoosejs.com/). The data is automatically loaded for you in the automated tests, so you can focus on writing the Mongoose code. You do not need to connect to a MongoDB database for this exercise.

## Rationale

You will need to read and write data to MongoDB from your Node.js application. The best way to do this is to use an npm package called [Mongoose](https://mongoosejs.com/). Mongoose provides a schema-based solution to model your application data and methods to query and save data to MongoDB. 

Learning how to write a schema, model, and queries will enable you to use them in an Express application when you need to return data from MongoDB as the response to an API request.

## Getting started

1. Open this exercise in VS Code, and open the terminal
2. Type: `npm install` to install all required node dependencies

## Instructions Part A - Create a Schema and Model

1. Open `src/InventoryModel.js` in VS Code
2. In this file, [define a Schema](https://mongoosejs.com/docs/guide.html#definition) to match the data format for a single object from the array in [inventory.json](./data/inventory.json)
   - Make sure your schema enforces that `item`, `qty` and `status` are required.
   - **Hint:** because you are writing your code in Node.js, you will need to convert the es6 `import` syntax into the CommonJS `require` syntax. Put this at the top of your file instead of what is in the [define a Schema](https://mongoosejs.com/docs/guide.html#definition) example:

      ```js
      const mongoose = require("mongoose");
      ```

3. Once your schema is defined, [create a model](https://mongoosejs.com/docs/guide.html#models).
4. Export your model from the file using the `module.exports` syntax
5. Test your model is working by typing: `npm test InventoryModel`

--- 

## Instructions Part B - Write queries

Complete the functions in [`src/queries.js`](./src/queries.js) for the following business scenarios.

You can type `npm test queries` in your Terminal to run tests specifically for this file.

### `getAllItems`

- Returns all items from the inventory

### `getItemById`

- Returns a single item that matches the `id` passed in as an argument to the function

### `getDamagedItems`

- Returns all items that have a status of `"D"`

### `getLowStockItems`

- Returns all items that have a status of `"A"` and have `qty` less than `30`

### Tips

- Read the Mongoose docs for [`find`](https://mongoosejs.com/docs/api.html#model_Model.find) and [`findById`](https://mongoosejs.com/docs/api.html#model_Model.findById)
- Use [Learn Mongoose find() by Example](https://masteringjs.io/tutorials/mongoose/find) as a cheatsheet
- You will need to require `InventoryModel` at the top of this file, so you can use the [`find`](https://mongoosejs.com/docs/api.html#model_Model.find) and other Mongoose queries
- Don't forget to `return` the result of the Mongoose query in each function
- Make sure to put `await` in front of your Mongoose query, as it is an asynchronous function
- You can read the tests to see what they are expecting in [src/queries.test.js](./src/queries.test.js)

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Exercise has been submitted in Google Classroom

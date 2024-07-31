[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11097402&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Using Mongoose in Express

## Brief

House Tricks is a Real Estate Agency who are wanting an application to display upcoming properties. You need to complete the Express API and create routes to retrieve all the properties and a single property. In the Express routes, query the property data from MongoDB.

## Getting started

1. Open the terminal for this project, and type `npm install` to install all required dependencies

## Instructions Part A - Start MongoDB and import data

1. Start MongoDB in Docker by opening a terminal and `copy & paste` in the following: 
```shell
docker run --name 02-exercise-mongoose-in-express-mongo_db \
  -p 27017:27017 \
  -v 02-exercise-run-mongoose-in-express-mongodb_data_container:/data/db \
  -d \
  mongo
```
2. Open MongoDB Compass, and connect to MongoDB
3. Create a new database named `mongo`, with a collection named `properties`.
4. Import data into MongoDB from [`./data/properties.json`](./data/properties.json).

## Instructions Part B - Connect to MongoDB in Express

Your Express application needs to connect to MongoDB before you can start creating and querying schemas and models. 

When you write tests for your application, it's best to not connect to an actual database in your tests. Imagine if your tests changed your user's data by accident! For this reason, we like to separate where we connect to our database from our main application file. 

You already do this in `server.js`, when a port is opened for the server in a separate file to `app.js`. Opening a port in a separate file allows us to test `app.js` without starting a long-running server.

`server.js` is the perfect place to open a database connection, as it means you can write your tests for `app.js` without worrying about handling the database connection to your Docker container.

1. Open a new Terminal in VS Code, and start your Express server: `npm start`
1. Open [`./src/server.js`](./src/server.js)
2. Import the `mongoose` module at the top of the file

   ```js
   const mongoose = require("mongoose");
   ```

3. **Before** the `app.listen` code, [make a connection to your MongoDB database](https://mongoosejs.com/docs/connections.html). Make sure to replace the last part of the MongoDB address with the name of your database: `mongoose.connect('mongodb://localhost:27017/mongo');` (it's named mongo because that's what you called the database in Part A)

## Instructions Part C - Create a model

Now you have connected to MongoDB start defining your model. 

1. A file has been created for you in [`./src/models/PropertyModel.js`](./src/models/PropertyModel.js). Create your schema and model in this file.
2. Reference [`./data/properties.json`](./data/properties.json) to determine what types you need to use. **Important:** ignore the `_id` property in your Schema. Mongoose does this automatically.
3. Make sure every field is `required`.
4. Name your model `Property`. This is to ensure Mongoose uses the correct collection in MongoDB.
5. Export your Model so you can require it from another file.

## Instructions Part D - Get all properties

Create a new Express route named `/properties`, and query your Mongoose model to return a list of all properties.

Open a new Terminal in VS Code to run your tests.

**Acceptance criteria**

- You have written a test for this Express Route using SuperTest
- When making a `GET` request to `/properties`, the response body is in the following format (note `id` is **not** `_id`)

  ```json
  [
    {
      "id": "61480db44ab0cf7175467757",
      "askingPrice": "$891822.26",
      "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      "address": "8 Shasta Pass",
      "title": "A Beauty on Shasta",
      "img": "https://placeimg.com/640/480/arch"
    },
    {
      "id": "61480db44ab0cf7175467755",
      "askingPrice": "$876330.57",
      "description": "Large Executive townhouse bordering On Town Centre",
      "address": "2 Bowman Avenue",
      "title": "Bowman Brilliance – Style and Value!",
      "img": "https://placeimg.com/642/482/arch"
    },
    {
      "id": "61480db44ab0cf7175467756",
      "askingPrice": "$946446.87",
      "description": "Combining contemporary comforts with a functional layout",
      "address": "8237 Moland Hill",
      "title": "Rare Moland Hill Stunner",
      "img": "https://placeimg.com/644/484/arch"
    }
  ]
   ```

## Instructions Part E - Get a single property

Create a new Express route with a path parameter that retrieves a single property. The route name should be `/properties/:id`.

**Acceptance criteria**

- You have written a test for this Express Route using SuperTest
- When making a `GET` request to `/properties/61480db44ab0cf7175467757`, the response body is in the following format (note `id` is **not** `_id`)

  ```json
  {
    "id": "61480db44ab0cf7175467757",
    "askingPrice": "$891822.26",
    "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
    "address": "8 Shasta Pass",
    "title": "A Beauty on Shasta",
    "img": "https://placeimg.com/640/480/arch"
  }
   ```

--- 

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Automated tests pass in GitHub
- [ ] Exercise has been submitted in Google Classroom

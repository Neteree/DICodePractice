[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11241918&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Validate the request body in Express

# Scenario

House Tricks have an online application where they can post properties for sale. Recently, some of the real estate agents have been making mistakes when they enter the price for the property, and accidently entering negative numbers.

This needs to be secured against by enforcing that the asking price for a property is `0` or above.

Your Tech Lead has insisted you use specific libraries to validate data, to ensure all developers in the company are using the same tools. [`joi`](https://joi.dev/) schema's are used with [`celebrate`](https://www.npmjs.com/package/celebrate) as the validation middleware.

---

# API specification

## Create new Property

Create a new property for sale that will be displayed.

**URL** : `/properties`

**Method** : `POST`

**Request body example**

```json
{
  "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
  "address": "8 Shasta Pass",
  "title": "A Beauty on Shasta",
  "img": "https://placeimg.com/640/480/arch",
  "askingPrice": 891822.26
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "id": "615994b40082f6819860b55f",
  "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
  "address": "8 Shasta Pass",
  "title": "A Beauty on Shasta",
  "img": "https://placeimg.com/640/480/arch",
  "askingPrice": 891822.26
}
```

### Error Responses

**Condition** : If the request body doesn't match the allowed Schema.

**Code** : `400 BAD REQUEST`

---

## Getting started

### Server

- Open a Terminal in VS Code for this project
- Type `npm install` to install npm dependencies
- Type `npm start` to start the Express Server

### MongoDB Database

- Start MongoDB in Docker by opening a terminal and `copy & paste` in the following: 
```shell
docker run --name 02-exercise-express-request-body-validation-with-joi-mongo_db \
  -p 27017:27017 \
  -v 02-exercise-express-request-body-validation-with-joi-mongo_db_data_container:/data/db \
  -d \
  mongo
```

---
- Connect to MongoDB using  [MongoDB Compass](https://www.mongodb.com/products/compass). Create a database named `mongo`, and load data from the [data](./data) folder into the database.
- Don't forget to [connect to MongoDB using Mongoose](https://mongoosejs.com/docs/connections.html) in `server.js`

---

# User Story

- As the real estate agent for House Tricks
- I want to add a new property to the website
- So potential customers can view and purchase the property

## Acceptance criteria

- The Express route for `POST /properties` meets the API specification.
- The API responds with a 400 status code if the request body is invalid:
  - `description` is a required string
  - `address` is a required string
  - `title` is a required string
  - `img` is a required string
  - `askingPrice` is a required number, and is at least set to `0`
- The code for the Express application is well tested with automated tests, including a test for if the `askingPrice` is less than `0`

## Technical requirements

- [`joi`](https://joi.dev/) schema's are used with [`celebrate`](https://www.npmjs.com/package/celebrate) as the validation middleware.

---

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Automated tests pass in GitHub
- [ ] Exercise is submitted in Google Classroom


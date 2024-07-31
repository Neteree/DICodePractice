[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11241482&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Data validation with Joi 

## Brief

Ensure that when customers provide input to your application, the data they provide is of good quality. 

Create some validation schema's using [Joi](https://joi.dev/api/?v=17.4.2#introduction) to validate data against the specification in the instructions.

## Rationale

Data validation is a common task for web applications. In particular, whenever customers provide data that you will store in a database. For example, as part of a `POST` request body.

---

## Getting started

1. Open the terminal, and type `npm install` to ensure you have the dependencies needed to run the tests.
2. You can run the tests as you code by typing: `npm run test:watch`.

---

## Instructions Part A - Install Joi

1. Open the terminal and type: `npm install joi`
2. Git add and commit the changes to `package.json` and `package-lock.json`

## Instructions Part B - Validate Login Details

1. Open [`./src/loginSchema.js`](./src/loginSchema.js)
2. Import `joi` at the top of the file: `const Joi = require("joi");`
3. Find the variable declared as `const schema = null`. Replace `null` with a [Joi schema](https://joi.dev/api/?v=17.4.2#example) that matches the specification below.

### Object Schema

- `username`
   - a required string
   - must contain only alphanumeric characters
   - at least three characters long but no more than 30
- `password`
   - a required string

## Instructions Part C - Validate a Pet Insurance Quote

1. Open [`./src/quoteSchema.js`](./src/quoteSchema.js)
2. Import `joi` at the top of the file: `const Joi = require("joi");`
3. Find the variable declared as `const schema = null`. Replace `null` with a [Joi schema](https://joi.dev/api/?v=17.4.2#example) that matches the specification below.

### Object Schema

- `planType`
  - a required string
- `petName`
  - a required string
- `expiry`
  - a required date
  - must be greater than now

## Instructions Part D - Validate a Product

1. Open [`./src/productSchema.js`](./src/productSchema.js)
2. Import `joi` at the top of the file: `const Joi = require("joi");`
3. Find the variable declared as `const schema = null`. Replace `null` with a [Joi schema](https://joi.dev/api/?v=17.4.2#example) that matches the specification below.

### Object Schema

- `title`
  - a required string
- `price`
  - a required number
  - must be greater than or equal to `0`.
- `image`
  - an optional string
- `description`
  - a required string
  - must have a maximum character limit of 170

--- 

# Submit your Exercise

- [ ] Automated tests pass in GitHub
- [ ] Exercise has been submitted in Google Classroom


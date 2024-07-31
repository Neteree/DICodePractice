# 02 Exercise - Filtering properties and unit testing 

## Brief

House Tricks is a real estate company that has properties listed on its website. Sometimes, properties will be private and should not appear on their website.

You need to create a function that filters out any properties marked as private. You will use this function later, so only public listings are returned from the listings API. For now, we are focusing only on this function.

Follow [Test Driven Development](https://www.youtube.com/watch?v=llaUBH5oayw) practices by writing your tests before you write your function.

## User Story

As a real estate agent for House Tricks
I want private listings not to appear on the website
So that I do not get contacted about properties that are already sold

### Acceptance criteria

- Properties marked as private should not appear on the website
- Properties **not** marked as private should appear on the website

---

## Instructions Part A - Test scenarios

Make sure you understand the requirements of what you are trying to build by understanding the inputs and outputs of your function.

Input: A list of properties, as specified in [`properties.json`](./src/properties.json)

Output: A list of properties that contain `private: false` in the object. In [`properties.json`](./src/properties.json), these are the properties at index 0 and index 2.

## Instructions Part A - Create `filterProperties.js`

1. Create a file in the `src` folder called `filterProperties.js`
2. Create an empty function in this file
3. Export the function following the CommonJS module syntax
4. Before implementing the function, create your automated test by following the instructions below in order.

## Instructions Part B - Install Jest

Jest is the library that you use to write and run automated tests in JavaScript.

1. Run `npm install jest --save-dev` to install Jest as a dev dependency for this project
2. Update `package.json`, and add a script named `test`. The value of this script should be the word `jest` so that whenever `npm test` is typed in your Terminal, it runs `jest`. For example:

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

   **Note** make sure you are only adding the `test` script, not replacing existing scripts or properties

3. In git, add and commit the changes to `package.json` and `package-lock.json` that installing jest and updating the test script have created.

## Instructions Part C - Write your test

Writing tests before you write the implementation of your function is called test-driven development. A key benefit of test-driven development is that it makes you focus on requirements before writing code. Remind yourself of the requirements for your `filterProperties` function.

Having the file name end in `*.test.js` enables jest to find the test file and run it. This is how jest knows what tests to run.

1. Create a file: `src/filterProperties.test.js`
2. Import the `filterProperties` function at the top of the file using the CommonJS syntax
3. Import the `properties` JSON at the top of the file, using the CommonJS syntax

   ```js
   const properties = require("./properties.json");
   ```

4. Follow the Test Driven Development philosophy by writing your tests before you write your code. Your test will fail until you complete your `filterProperties` function. You must call the `filterProperties` function and pass in the `properties` as an argument. You need to assert the result of this function call matches the expected output

## Instructions Part D - Complete `filterProperties.js`

1. Complete the implementation of the `filterProperties` function so that your test passes
2. Remember to add the argument in the function to accept the `properties` array

--- 

# Submit your Exercise

- [ ] Push your commits to GitHub
- [ ] Submit your exercise in iQualify


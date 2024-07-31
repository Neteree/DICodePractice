[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11084248&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Create an Express application 

## Brief

Create an Express application with an endpoint that responds to your three favourite movies.

The Express app should start when you type `npm start` in your Terminal. 

For this project, you will need to read documentation, Google or go through old material to complete the brief.

## Testing with Cypress

GitHub will run tests using a tool called [Cypress](https://www.cypress.io/). You can ignore files relating to Cypress.

## Instructions Part A - Configure your Node.js project

- Initialise a new `npm` project using [`npm init`](https://docs.npmjs.com/cli/v7/commands/npm-init)
- Install [`express`](https://www.npmjs.com/package/express) as a dependency
- Commit your `package.json` and `package-lock.json` files to git

---

## Instructions Part B - Set up your Express app

Read the Express docs or follow tutorials to create an Express app.

1. Create your `app.js` file at the following location: `src/app.js`
2. Create a route/endpoint for a `GET` method: `/movies`
3. Make the `/movies` route/endpoint respond with JSON that is an array of your three favourite movies
4. Think about the data structure you will use for each movie. If you can imagine displaying these movies on a web application, how would you structure the data that makes sense to the web application?
5. Make sure your app runs on port `3000`. This will ensure the automated tests pass.
6. You can start your app by running `node src/app.js` in your Terminal. You can stop your app by typing `control-c` in the Terminal
7. Test your Express app using Insomnia to make sure it works as you expect.

### Hints

- Read the [Express](https://expressjs.com/) docs. They have a good getting started section. Or search for Express tutorials in the course material or on Google.
- It is common to return an array of objects to describe data in API's
- The tests will check for an array of 3 items are returned, so make sure you follow that instruction

---

## Instructions Part C - Start `express` from the `npm start` script

- Research how to make your Express app start when typing `npm start` by using Google search terms such as "use npm start for an express app"
- Make your express app start when you type `npm start`

--- 

# Submit your Exercise

- [ ] Automated tests pass in GitHub
- [ ] The exercise is submitted in iQualify


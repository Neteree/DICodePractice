[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10990394&assignment_repo_type=AssignmentRepo)
# 02 Exercise - My first Node.js script 

## Brief

Run some JavaScript using Node in your Terminal.

## Rationale

Understand that Node.js runs on a computer or server, rather than in the browser.

## Instructions

1. Open this repository in VS Code, and open `src/index.js`
2. Open your Terminal, and type `npm install` - this will ensure prettier and VS Code work as expected
3. In this file is a list of products on a `products` variable. 
4. Create a new variable, `cheapProducts`, and filter the list of products to only include products under `500`. Assign the new list of filtered products to `cheapProducts`
5. `console.log` the variable with the new list of products. e.g: `console.log(cheapProducts)`
6. To run this script in your Terminal, open the Terminal in VS Code, and run this JavaScript in Node.js by typing: `node src/index.js`. You should see whatever you `console.log` appear in the Terminal
7. You can check the automated tests are passing typing the following in your Terminal: `npm test`

--- 

# Submit your Exercise

- [ ] Automated tests pass in GitHub

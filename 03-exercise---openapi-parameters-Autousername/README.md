# 03 Exercise - OpenAPI Definition File - Parameters

## Brief

Your team is working on a Todo application. As part of the API design process, your Tech Lead has asked to you to describe the query parameters for the pagination for the GET /todos route.

The pagination requires the `page` and the `limit`. *Limit* will be the number of todos to display on a page and the *page* will the page to display to the user. For example if there where 30 todos and the limit was 10, then `page=1` would be the first 10 todos, and `page=2` would be the following 10.

See [OpenAPI 3.0 - Describing Parameters](https://swagger.io/docs/specification/describing-parameters/)

## Getting Started

1. Open a Terminal in VS Code for this project
2. Type `npm install` to install npm dependencies
3. `Type npm start` to start the Express Server
4. Open `http://localhost:5001/` in your browser to view the [Swagger UI](https://swagger.io/tools/swagger-ui/) generated API docs. (You need to restart the server after you update the `apispec.yaml` file.)

## Instructions

Update the `apispec.yaml` file to include the query parameters for the GET /todos route.

**Acceptance Criteria:**

- [ ] The `apispec.yaml` file includes query parameters for the GET /todos route. The parameters will be `page` and `limit`.
- [ ] Commits are pushed to GitHub
- [ ] Exercise has been submitted in Google Classroom

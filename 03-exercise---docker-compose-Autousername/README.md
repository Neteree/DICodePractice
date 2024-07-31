# 03 Exercise - Docker Compose

## Scenario

Your team has been running the components of the Todo application code repo to assist with their planning of the app. They have found that it has become a time intensive task and that they need to keep track of differences in the setup across different computers.

Your tech lead has asked you to use containerization technology to improve the Todo application so that it is fast, consistent and easy to run.

## Brief

If you need a quick refresher - the codebase used in this Todo app boilerplate is based on a fork of the source code from this youtube tutorial [PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8) but has been updated so that you can follow along with your friendly Developers Institute tech lead in the below videos.

## Instructions
Follow Mark's tutorial videos where he will walk you through how to use [Docker](https://docs.docker.com/get-started/overview/) to containerize the separate components of the Todo application and [Docker Compose](https://docs.docker.com/compose/) to run them all at once with one command.

Make sure that you read the bullet points for each section before following along with the video.

### Part A - Getting Started

Run the existing Todos app.

- Don't forget to `npm install` in the correct folders
- You can create your own database container using the below command in your terminal.
  ```zsh
    docker run -d \
      --name postgres \
      -p 5432:5432 \
      -e POSTGRES_PASSWORD=password \
      -v postgres:/var/lib/postgresql/data \
      -v "$(pwd)/server:/docker-entrypoint-initdb.d" \
      -d \
      postgres
    ```
  - Navigate to `http://localhost:5001/api/spec` in your browser to view the [Swagger UI](https://swagger.io/tools/swagger-ui/) generated API docs.

### Part B - Watch 'Why Docker?'
[Docker-compose - 01 Why](https://www.loom.com/share/293c71810f4b4fa586264355ebab2561?sid=facb119c-f805-456a-a6ab-f81aea22da84) (8min)
- Mark takes us through why using Docker Compose is beneficial for our projects.
- Note: In this video you can ignore that the port Mark has used for the server is different from the one in this repo.

### Part C - Watch 'Why Docker? #2'
[Docker-compose - 02 Why Part 2 - Use Diff Tool to Solve a Mystery](https://www.loom.com/share/e5db3a6c7bf24c42b7b5e18720299327?sid=008c7265-2e09-49b3-bb56-a23f271d36ce) (7min)
- Mark takes us through a real example of an issue that can occur with projects that don't use Docker Compose.

### Part D - Containerize your Database
[Docker-compose - 03 Database Config](https://www.loom.com/share/7be11575828b4f83ace43a6173d479b6?sid=cac30c83-4ecb-46e8-ada4-06a896a3f1ec) (24min)
- Mark takes us through creating a `docker-compose.yml` file for the project, and containerizing the Database with a `Dockerfile`.
- Use the `postgres:14.0-alpine3.14` image in the Database Dockerfile instead of Postgres version 13.

### Part E - Containerize your Server
[Docker-compose - 04 Dockerize the Server](https://www.loom.com/share/0846359cfed14b7dadda3e91a797d1cf?sid=5b41b411-9ece-48dc-ad24-4a54701dc620) (17min)
- Mark takes us through containerizing the server.
- Before you begin, in your repo's `/server/.env` change `EXPRESS_PORT=5001` to `EXPRESS_PORT=5000`. Doing this will change the port that your server is listening on in your `sever/index.js` file, because when Dockerizing the server we will want the server to be listening on PORT 5000. 
- Use the `node:16-alpine` image in the Server Dockerfile of Node instead of Node version 12.

### Part F - Containerize your Client
[Docker-compose - 05 Dockerize the Client](https://www.loom.com/share/2626f50e765548409a9df1d1ff26b18f?sid=526cfae0-b3a8-48e3-9648-f75961215c51) (13min)
- Mark takes us through containerizing the client.
- Use the `node:16-alpine3.11` image in the Client Dockerfile instead of Node version 12.

### Part G - Create a Bind Mount
[Docker-compose - Hot Reloading with Bind Mounts](https://www.loom.com/share/371aa8617f694dbaaa5830da003617b5?sid=aa5c8acc-4f36-4961-8f22-be50c7eab9dd) (17min)
- Mark shows us how to use Bind Mounts on the client and server so that changes we make to the files living on our machine are automatically copied to our running Docker containers.

### Part H - Enable Auto-reloading
[Docker-compose - Hot Reloading on the Client (Chokidar)](https://www.loom.com/share/103597196a3e43d4817b7914630d244c?sid=7cc34a2b-5018-4ebc-864a-a9153f62b212) (3min)
- Mark shows us how to get auto-reloading in our todo app without having to click the refresh button in the browser.

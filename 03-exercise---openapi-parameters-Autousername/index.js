const express = require("express");
const app = express();
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

// routes

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 5001;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

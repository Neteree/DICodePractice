const app = require("./app");
const port = 5001;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

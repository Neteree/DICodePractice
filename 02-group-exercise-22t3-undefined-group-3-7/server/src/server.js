const mongoose = require("mongoose");
const port = process.env.PORT || 5001;
const app = require("./app");

mongoose.connect("mongodb://localhost:27017/chirpie");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/movies", (req, res) => {
  res
    .status(200)
    .send([
      { name: "Pans Labyrinth" },
      { name: "LOTR FOTR" },
      { name: "Ender's Game" },
    ]);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

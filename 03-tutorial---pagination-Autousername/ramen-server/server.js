const express = require("express");
const cors = require("cors");
const reviewsRepo = require("./repos/ramenReviews");

const PORT = 5001;

const server = express();

server.use(cors());
server.use(express.json());

server.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await reviewsRepo.getAllReviews();
    return res.json(reviews);
  } catch (e) {
    console.error(e);
    return res.json({ error: e.message || e });
  }
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = server;

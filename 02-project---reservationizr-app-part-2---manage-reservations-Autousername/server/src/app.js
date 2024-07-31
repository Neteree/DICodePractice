const express = require("express");
const cors = require("cors");
const app = express();
const { celebrate, Joi, errors, Segments } = require("celebrate");
const { auth } = require("express-oauth2-jwt-bearer");
const RestaurantModel = require("./models/RestaurantModel");
const ReservationModel = require("./models/ReservationModel");
const isValidId = require("./utils/isValidId");

const checkJwt = auth({
  audience: "https://housetricks.com",
  issuerBaseURL: `https://dev-qdb7a30b4mauelvu.us.auth0.com/`,
});

app.use(cors());
app.use(express.json());

app.post(
  "/reservations",
  checkJwt,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      partySize: Joi.number().min(1).required(),
      date: Joi.date().min("now").required(),
      restaurantName: Joi.string().required(),
    }),
  }),
  async (req, res) => {
    const { body, auth } = req;

    const reservationBody = {
      ...body,
      userId: auth.payload.sub,
    };

    const reservation = new ReservationModel(reservationBody);
    await reservation.save();

    return res.status(201).send(reservation);
  }
);

app.get("/restaurants", async (req, res) => {
  const restaurants = await RestaurantModel.find({});
  res.send(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).send({ error: "invalid id provided" });
  }

  const restaurant = await RestaurantModel.findById(id);

  if (!restaurant) {
    return res.status(404).send({ error: "restaurant not found" });
  }

  res.send(restaurant);
});

app.get("/reservations", checkJwt, async (req, res) => {
  const { sub } = req.auth.payload;

  const reservations = await ReservationModel.find({ userId: sub });

  res.send(reservations);
});

app.get("/reservations/:id", checkJwt, async (req, res) => {
  const {
    params: { id },
    auth: {
      payload: { sub },
    },
  } = req;

  if (!isValidId(id)) {
    return res.status(400).send({ error: "invalid id provided" });
  }

  const reservation = await ReservationModel.findById(id);

  if (!reservation) {
    return res.status(404).send({ error: "reservation not found" });
  }

  if (sub !== reservation.userId) {
    return res.status(403).send({
      error: "user does not have permission to access this reservation",
    });
  }

  res.send(reservation);
});

app.use(errors());

module.exports = app;

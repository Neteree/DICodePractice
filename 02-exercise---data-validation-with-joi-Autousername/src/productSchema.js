const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().min(0).required(),
  image: Joi.string(),
  description: Joi.string().max(170).required(),
});

module.exports = schema;

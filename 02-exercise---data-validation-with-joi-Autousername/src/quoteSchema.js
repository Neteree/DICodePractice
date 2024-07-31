const Joi = require("joi");

const schema = Joi.object({
  planType: Joi.string().required(),
  petName: Joi.string().required(),
  expiry: Joi.date().greater("now").required(),
});

module.exports = schema;

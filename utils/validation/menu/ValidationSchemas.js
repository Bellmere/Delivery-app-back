const Joi = require('joi');

  const menuJoiSchema = Joi.object({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    food: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        src: Joi.string(),
      })
    ).required(),
  });

  module.exports = {
    menuJoiSchema
  }
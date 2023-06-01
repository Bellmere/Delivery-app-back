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

  const contactJoiSchema = Joi.object({
    name: Joi.string().messages({
      'any.required': 'Please provide a name for the contact',
    }),
    email: Joi.string().email().messages({
      'any.required': 'Please provide an email',
      'string.email': 'Please provide a valid email',
    }),
    phone: Joi.string().messages({
      'any.required': 'Please provide a phone number',
    }),
    address: Joi.string().messages({
      'any.required': 'Please provide an address',
    }),
    basketItems: Joi.array()
      .items(
        Joi.object({
          _id: Joi.string(),
          name: Joi.string(),
          price: Joi.number(),
          src: Joi.string(),
          quantity: Joi.number(),
        })
      )
      ,
    total: Joi.number(),
  });

  module.exports = {
    menuJoiSchema,
    contactJoiSchema
  }
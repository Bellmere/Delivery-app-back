const { Schema, model } = require('mongoose');

const foodSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
  },
});

const menuSchema = Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  food: {
    type: [foodSchema],
    required: true,
  },
});

const Menu = model('menu', menuSchema);

module.exports = Menu;
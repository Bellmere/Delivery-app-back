const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  basketItems: [
    {
      id: {
        type: String,
      },
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
      quantity: {
        type: Number,
        required: true,
      },
    }
  ],
  total: {
    type: Number,
    required: true,
  },
});

const Order = model('Order', orderSchema);

module.exports = Order;
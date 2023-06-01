const {Order} = require("../../models");

const addOrder = async (req, res, next) => {
    console.log(req.body);
  try {
    const result = await Order.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = addOrder;
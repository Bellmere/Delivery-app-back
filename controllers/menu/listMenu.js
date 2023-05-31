const { Menu } = require("../../models");

const getMenu = async (req, res, next) => {
    try {
      const result = await Menu.find({});
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = getMenu;
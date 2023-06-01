const express = require('express');

const { validateBody } = require("../../middlewares")
const { contactJoiSchema } = require('../../utils/validation/menu/ValidationSchemas');
const { order: ctrl } = require('../../controllers/');
const { addOrder } = ctrl;
console.log(addOrder);

const router = express.Router();

router.post('/', validateBody(contactJoiSchema), addOrder);

module.exports = router;
const express = require('express');

const { validateBody } = require('../../middlewares');
const { menuJoiSchema } = require('../../utils/validation/menu/ValidationSchemas');
const { menu: ctrl } = require('../../controllers/');
const { getMenu } = ctrl;

const router = express.Router()

router.get('/', getMenu);

module.exports = router;
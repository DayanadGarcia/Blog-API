const express = require('express');
const categoryController = require('../../controllers/categories.controller');
const authToken = require('../../Middlewares/auth');
const validateCategory = require('../../Middlewares/validateCategory');

const categoryRouter = express.Router();

categoryRouter.post('/', authToken, validateCategory.validateCategory,
categoryController.newCategory);

module.exports = categoryRouter;
const categoryService = require('../services/categories.service');
const { HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../helpers/statusCode');

const newCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createCategory = await categoryService.newCategory({ name });

    return res.status(HTTP_CREATED_STATUS).json(createCategory);
  } catch (err) {
    console.log('post category:', err.message);
    next(err);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const getCategories = await categoryService.getAllCategories();

    return res.status(HTTP_OK_STATUS).json(getCategories);
  } catch (err) {
    console.log('get category:', err.message);
    next(err);
  }
};

module.exports = {
  newCategory,
  getAllCategories,
};
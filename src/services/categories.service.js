const { Category } = require('../database/models');

const newCategory = async ({ name }) => {
  const createCategory = await Category.create({ name });
  // const categoryAndId = {
  //   createCategory,
  //   name,
  // };
  return createCategory;
};

const getAllCategories = async () => {
  const getCategories = await Category.findAll();
  return getCategories;
};

module.exports = {
  newCategory,
  getAllCategories,
};
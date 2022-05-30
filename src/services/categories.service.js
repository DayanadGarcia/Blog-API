const { Category } = require('../database/models');

const newCategory = async ({ name }) => {
  const createCategory = await Category.create({ name });
  // const categoryAndId = {
  //   createCategory,
  //   name,
  // };
  return createCategory;
};

module.exports = {
  newCategory,
};
const { Category } = require('../models');

const validateCategory = (name) => {
  if (!name) {
    return { type: 'FIELD_REQUIRED', message: '"name" is required' };
  }
  return { type: null, message: '' };
};

const create = async (name) => {
  const category = await Category.create({ name });
  console.log(category);
  return category;
}; 

module.exports = {
  validateCategory,
  create,
}; 
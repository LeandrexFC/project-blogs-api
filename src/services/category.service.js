const { Category } = require('../models');

const validateCategory = (name) => {
  if (!name) {
    return { type: 'FIELD_REQUIRED', message: '"name" is required' };
  }
  return { type: null, message: '' };
};

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  validateCategory,
  create,
  findAll,
}; 
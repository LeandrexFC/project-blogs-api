const categoryServices = require('../services/category.service');

const createCategories = async (req, res) => {
  const { name } = req.body; 

  const { type, message } = categoryServices.validateCategory(name);

  if (type === 'FIELD_REQUIRED') {
    return res.status(400).json({ message });
  }

  const result = await categoryServices.create(name);

  res.status(201).json(result);
};

const getAllCategories = async (req, res) => {
  const findAllCategories = await categoryServices.findAll();
  return res.status(200).json(findAllCategories);
};

module.exports = {
  createCategories,
  getAllCategories,
};
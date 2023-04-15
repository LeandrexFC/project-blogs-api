const userService = require('../services/user.service');
const tokenUtils = require('../utils/generateToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.validateUser(displayName, email, password, image);

  if (type === 'ERROR_LENGTH') {
    return res.status(400).json({ message });
  } if (type === 'INVALID_EMAIL') {
    return res.status(400).json({ message });
  } if (type === 'INVALID_PASSWORD') {
    return res.status(400).json({ message });
  } if (type === 'ERROR') {
    return res.status(409).json({ message }); 
  } 
  await userService.create({ displayName, email, password, image });

    const token = tokenUtils.generateToken({ displayName, password });
    return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const findAllUSers = await userService.findAll();
  return res.status(200).json(findAllUSers);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const { type, message, finalResults } = await userService.findById(id);

  if (type === 'UNKNOW_USER') {
    return res.status(404).json({ message });
  }
  
  return res.status(200).json(finalResults);
};
 
module.exports = {
  createUser,
  getAllUsers,
  getUsersById,
}; 
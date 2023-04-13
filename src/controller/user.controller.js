const userService = require('../services/user.service');
const generateToken = require('../utils/generateToken');

const addNewUser = async (req, res) => {
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

    const token = generateToken({ displayName, password });
    return res.status(201).json({ token });
};

module.exports = addNewUser;
const { User } = require('../models');

const validateUser = async (displayName, email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (displayName.length < 8) {
    return { type: 'ERROR_LENGTH', 
    message: '"displayName" length must be at least 8 characters long' };
  } if (!emailRegex.test(email)) {
    return { type: 'INVALID_EMAIL', message: '"email" must be a valid email' };
  } if (password.length < 6) {
    return { type: 'INVALID_PASSWORD', 
    message: '"password" length must be at least 6 characters long' };
  }
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    return { type: 'ERROR', message: 'User already registered' };
  }
  
  return { type: null, message: '' };
};

const create = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const findAll = async () => {
  const users = await User.findAll();
  const results = users.map((user) => ({
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  }));
  return results;
};

const findById = async (id) => {
  const users = await User.findOne({ where: { id } });

  if (!users) {
    return { type: 'UNKNOW_USER', message: 'User does not exist' };
  }

  const finalResults = {
    id: users.id,
    displayName: users.displayName,
    email: users.email,
    image: users.image,
  };

  return { type: null, message: '', finalResults };
};

module.exports = {
  validateUser,
  create,
  findAll,
  findById,
}; 
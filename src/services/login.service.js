const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const validateLogin = async (email, password) => {
  if (!email || !password) {
    return { type: 'FIELD_REQUIRED', message: 'Some required fields are missing' };
  } 
  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.password !== password) {
    return { type: 'WRONG_LOGIN', message: 'Invalid fields' };
  }

  const token = generateToken(user.dataValues);

  return { type: null, message: '', token };
};

module.exports = validateLogin;
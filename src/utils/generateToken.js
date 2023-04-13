const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; 

const configJWT = {
  expiresIn: '1m',
  algorithm: 'HS256',
  
};

const generateToken = (payload) => {
 const token = jwt.sign(payload, secretKey, configJWT);

 return token;
};

const validateToken = (token) => {
  if (!token) {
    return { type: 'TOKEN_REQUIRED', message: 'Miss Token' };
  }
  const isValid = jwt.verify(token, secretKey);

  if (!isValid) {
    return { type: 'TOKEN_INVALID', message: 'Invalid TOken' };
  }

  return { type: null, message: '' };
};

module.exports = {
  generateToken,
  validateToken,
}; 
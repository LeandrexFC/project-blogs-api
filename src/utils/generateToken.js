const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; 

const configJWT = {
  expiresIn: '15m',
  algorithm: 'HS256',
  
};

const generateToken = (payload) => {
 const token = jwt.sign(payload, secretKey, configJWT);

 return token;
};

const validateToken = (token) => {
  if (!token) {
    return { type: 'TOKEN_REQUIRED', message: 'Token not found' };
  }
  try {
    const isValid = jwt.verify(token, secretKey);
    return isValid;
  } catch (err) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  validateToken,
}; 
const token = require('../utils/generateToken');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;

  const returnToken = token.validateToken(authorization);

  const { type, message } = returnToken;

  if (type === 'TOKEN_REQUIRED') {
    return res.status(401).json({ message });
  } if (type === 'INVALID_TOKEN') {
    return res.status(401).json({ message });
  } 
    next();
};

module.exports = tokenValidate;
const userServices = require('../services/login.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const validate = await userServices(email, password);

  const { type, message, token } = validate;

  if (type === 'FIELD_REQUIRED') {
    return res.status(400).json({ message });
  } if (type === 'WRONG_LOGIN') {
    return res.status(400).json({ message });
  } return res.status(200).json({ token });
};

module.exports = loginController;

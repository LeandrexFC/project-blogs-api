const userServices = require('../services/user.services');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  const validate = await userServices(email, password);

  const { type, message, token } = validate;
  console.log(message);

  if (type === 'FIELD_REQUIRED') {
    return res.status(400).json({ message });
  } if (type === 'WRONG_LOGIN') {
    return res.status(400).json({ message });
  } return res.status(200).json({ token });
};

module.exports = {
  loginController,
};
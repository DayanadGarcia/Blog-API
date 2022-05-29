const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/statusCode');

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;

  if (email === undefined || password === undefined
    || password.length === 0 || email.length === 0) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  loginValidate,
};
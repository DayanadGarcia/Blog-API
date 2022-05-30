const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/statusCode');

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!/\S+@\S+\.\S+/i.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: '"email" must be a valid email',
    });
  }
  if (password.length < 6) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = {
  validateUser,
};
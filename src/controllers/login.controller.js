const loginService = require('../services/login.service');
const { HTTP_OK_STATUS } = require('../helpers/statusCode');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);

    return res.status(HTTP_OK_STATUS).json({ token });
  } catch (err) {
    console.log('login error: ', err.message);
    next(err);
  }
};

module.exports = {
  login,
};
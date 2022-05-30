const { HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../helpers/statusCode');
const userService = require('../services/user.service');

const newUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.newUser({ displayName, email, password, image });

    return res.status(HTTP_CREATED_STATUS).json({ token });
  } catch (err) {
    console.log('controller user', err.message);
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const getAll = await userService.getAllUsers();
    return res.status(HTTP_OK_STATUS).json(getAll);
  } catch (err) {
    console.log('get Users:', err.message);
    next(err);
  }
};

module.exports = {
  newUser,
  getAllUsers,
};
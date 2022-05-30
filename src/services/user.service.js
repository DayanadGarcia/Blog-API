const { User } = require('../database/models');
const { HTTP_CONFLICT_STATUS } = require('../helpers/statusCode');
const jwt = require('../helpers/jwtToken');

const errorMsg = (status, message) => ({
  status,
  message,
});

const newUser = async (user) => {
  const userExists = await User.findOne({ where: { email: user.email } });
  if (userExists) {
    throw errorMsg(HTTP_CONFLICT_STATUS, 'User already registered');
  } 

  await User.create(user);

  const jwtToken = jwt.generateJwt(user.email);
  return jwtToken;
};

const getAllUsers = async () => {
  const getAll = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return getAll;
};

module.exports = {
  newUser,
  getAllUsers,
};
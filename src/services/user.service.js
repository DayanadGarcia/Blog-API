const { User } = require('../database/models');
const { HTTP_CONFLICT_STATUS, HTTP_NOT_FOUND_STATUS } = require('../helpers/statusCode');
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

const getUserId = async (id) => {
  const userExists = await User
  .findOne({ where: { id } });
  if (!userExists) throw errorMsg(HTTP_NOT_FOUND_STATUS, 'User does not exist');

    const user = await User.findByPk(id,
      {
        attributes: {
           exclude: ['password'],
        } });
    return user;
};

module.exports = {
  newUser,
  getAllUsers,
  getUserId,
};
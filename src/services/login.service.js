const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/statusCode');
const { User } = require('../database/models');

const jwt = require('../helpers/jwtToken');

const errorMsg = (status, message) => ({
  status,
  message,
});

const login = async (email, password) => {
  const userExists = await User.findOne({ where: { email, password } });
  if (!userExists) throw errorMsg(HTTP_BAD_REQUEST_STATUS, 'Invalid fields');
  
  const token = jwt.generateJwt(email);
  return token;
}; 

module.exports = {
  login,
};
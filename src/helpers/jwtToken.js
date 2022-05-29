const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJwt = (email) => {
const token = jwt.sign(
  { data: email }, process.env.JWT_SECRET, jwtConfig,
);

return token;
};

module.exports = {
  generateJwt,
};
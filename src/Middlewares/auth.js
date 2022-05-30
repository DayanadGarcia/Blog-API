const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED_STATUS } = require('../helpers/statusCode');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(HTTP_UNAUTHORIZED_STATUS)
    .json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
      }
    });
    
    req.user = payload;
    return next();
  } catch (err) {
    console.log('auth token', err.message);
    err.statusCode = HTTP_UNAUTHORIZED_STATUS;
    return next(err);
  }
};
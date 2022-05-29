const { HTTP_INTERNAL_SERVER_ERROR_STATUS } = require('../helpers/statusCode');

module.exports = (err, req, res, _next) => {
  if (err.status) {
      return res.status(err.status).json({ message: err.message });
  }
  return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: err.message });
}; 
const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/statusCode');

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
 res.status(HTTP_BAD_REQUEST_STATUS).json({
    message: '"name" is required',
  }); 
}
  next();
};

module.exports = {
  validateCategory,
};
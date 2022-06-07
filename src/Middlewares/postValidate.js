const { HTTP_BAD_REQUEST_STATUS } = require('../helpers/statusCode');

const validateFieldsPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title === undefined || content === undefined || categoryIds === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'Some required fields are missing',
    });
  }

  next();
};

module.exports = {
  validateFieldsPost,
};
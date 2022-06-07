const postService = require('../services/post.service');
const { HTTP_OK_STATUS } = require('../helpers/statusCode');

const getPosts = async (req, res, next) => {
  try {
      const getAllPosts = await postService.getPosts();

      return res.status(HTTP_OK_STATUS).json(getAllPosts);
  } catch (err) {
    console.log('create post:', err.message);
    next(err);
  }
};

module.exports = {
  getPosts,
};
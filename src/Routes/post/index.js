const express = require('express');
const postController = require('../../controllers/post.controller');
const authToken = require('../../Middlewares/auth');
// const validatePost = require('../../Middlewares/postValidate');

const postRouter = express.Router();

postRouter.get('/', authToken, postController.getPosts);

module.exports = postRouter;
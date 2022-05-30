const express = require('express');
const userController = require('../../controllers/user.controller');
const validateNewUser = require('../../Middlewares/newUserValidate');
const authToken = require('../../Middlewares/auth');

const userRouter = express.Router();

userRouter.post('/', validateNewUser.validateUser, userController.newUser);
userRouter.get('/', authToken, userController.getAllUsers);
userRouter.get('/:id', authToken, userController.getUserId);

module.exports = userRouter;

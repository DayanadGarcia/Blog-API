const express = require('express');
const loginController = require('../../controllers/login.controller');
const validateLogin = require('../../Middlewares/loginValidate');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin.loginValidate, loginController.login);

module.exports = loginRouter;
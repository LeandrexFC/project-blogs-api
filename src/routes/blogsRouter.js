const blogsRouter = require('express').Router();
const controller = require('../controller/user.controller');

blogsRouter.post('/', controller.loginController);

module.exports = blogsRouter;

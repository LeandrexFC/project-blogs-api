const blogsRouter = require('express').Router();
const logincontroller = require('../controller/login.controller');
const userController = require('../controller/user.controller');

blogsRouter.post('/login', logincontroller);
blogsRouter.post('/user', userController);

module.exports = blogsRouter;

const blogsRouter = require('express').Router();
const tokenValidate = require('../middleware/tokenvalidate');
const logincontroller = require('../controller/login.controller');
const userController = require('../controller/user.controller');

blogsRouter.post('/login', logincontroller);
blogsRouter.post('/user', userController.createUser);
blogsRouter.get('/user', tokenValidate, userController.getAllUsers);

module.exports = blogsRouter;

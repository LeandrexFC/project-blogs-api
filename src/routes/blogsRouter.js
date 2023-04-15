const blogsRouter = require('express').Router();
const tokenValidate = require('../middleware/tokenvalidate');
const logincontroller = require('../controller/login.controller');
const userController = require('../controller/user.controller');
const categoriesController = require('../controller/categories.controller');

blogsRouter.post('/login', logincontroller);
blogsRouter.post('/user', userController.createUser);
blogsRouter.get('/user', tokenValidate, userController.getAllUsers);
blogsRouter.get('/user/:id', tokenValidate, userController.getUsersById);
blogsRouter.post('/categories', tokenValidate, categoriesController.createCategories);
blogsRouter.get('/categories', tokenValidate, categoriesController.getAllCategories);

module.exports = blogsRouter;

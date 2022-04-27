const userController = require('../controllers/users.controller');
const userRouter = require('express').Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.get('/auth', userController.auth);

module.exports = userRouter;

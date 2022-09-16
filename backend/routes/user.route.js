const userRouter = require('express').Router();
const useAuth = require('../middlewares/auth.middleware');
const { login, signUp } = require('../controllers/user.controller');

// routes
userRouter.post('/login', login);
userRouter.post('/signup', signUp);

module.exports = userRouter;
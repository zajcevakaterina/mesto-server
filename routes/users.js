const usersRouter = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/users');

usersRouter.use('/users/:id', getUserById);

usersRouter.use('/users', getAllUsers);

module.exports = usersRouter;

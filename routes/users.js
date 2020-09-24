const usersRouter = require('express').Router();
const { getAllUsers, getUserById, createUser } = require('../controllers/users');

usersRouter.get('/users/:id', getUserById);

usersRouter.get('/users', getAllUsers);

usersRouter.post('/users', createUser);

module.exports = usersRouter;

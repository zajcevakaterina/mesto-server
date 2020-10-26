const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getAllUsers, getUserById, getUserByToken } = require('../controllers/users');

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/me', getUserByToken);

usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex(),
  }),
}), getUserById);

module.exports = usersRouter;

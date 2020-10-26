const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getAllUsers, getUserById, getUserByToken } = require('../controllers/users');

usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
}), getUserById);

usersRouter.get('/users/me', getUserByToken);

usersRouter.get('/users', getAllUsers);

module.exports = usersRouter;

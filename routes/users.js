const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');

const {
  getAllUsers,
  getUserById,
  getUserByToken,
  setUserInfo,
  setUserAvatar,
} = require('../controllers/users');

usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), setUserInfo);

usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom((value, helpers) => {
      if (!isURL(value)) return helpers.error('К сожалению, ссылка не прошла валидацию');
      return value;
    }),
  }),
}), setUserAvatar);

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/me', getUserByToken);

usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
}), getUserById);

module.exports = usersRouter;

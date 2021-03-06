const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundErr = require('../errors/not-found-error');
const AuthErr = require('../errors/auth-error');
const {
  defaultName,
  defaultAbout,
  defaultAvatar,
} = require('../utils/userData');
const ConflictError = require('../errors/conflict-error');
const BadReqErr = require('../errors/bad-request-err');

const getAllUsers = (req, res, next) => User.find({})
  .then((users) => {
    if (!users) {
      throw new NotFoundErr({ message: 'Пользователи не найдены' });
    }
    res.status(200).send({ data: users });
  })
  .catch(next);

const getUserById = (req, res, next) => User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      throw new NotFoundErr({ message: 'Нет пользователя с таким id' });
    }
    res.status(200).send(user);
  })
  .catch(next);

const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      name: name || defaultName,
      about: about || defaultAbout,
      avatar: avatar || defaultAvatar,
      email,
      password: hash,
    }))
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) {
        throw new ConflictError({
          message: 'Пользователь с таким email уже зарегистрирован',
        });
      } else next(err);
    })
    .then((user) => res.send({ message: `Пользователь c email ${user.email} успешно зарегистрирован` }))
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'very-secret-key',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => {
      throw new AuthErr(err.message);
    })
    .catch(next);
};

const getUserByToken = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundErr({ message: 'Пользователь не найден' });
      } else {
        res.send(user);
      }
    })
    .catch(next);
};

const setUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadReqErr({ message: 'Данные введены не корректно' }));
      } else {
        next(err);
      }
    });
};

const setUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadReqErr({ message: 'Данные введены не корректно' }));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByToken,
  createUser,
  login,
  setUserInfo,
  setUserAvatar,
};

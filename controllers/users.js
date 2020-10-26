const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundErr = require('../errors/not-found-error');
const AuthErr = require('../errors/auth-error');
const { defaultName, defaultAbout, defaultAvatar } = require('../utils/userData');
const ConflictError = require('../errors/conflict-error');

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
    name, about, avatar, email, password,
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
        throw new ConflictError({ message: 'Пользователь с таким email уже зарегистрирован' });
      } else next(err);
    })
    .then((user) => res.send({ message: `Пользователь c email ${user.email} успешно зарегистрирован` }))
    .catch(next);
};

const login = (req, res, next) => {
  const {
    email, password,
  } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'very-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => {
      throw new AuthErr({ message: err.message });
    })
    .catch(next);
};

const getUserByToken = (req, res, next) => {
  console.log(req.user, 'контроллеры');
  console.log(req.user._id);
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

module.exports = {
  getAllUsers,
  getUserById,
  getUserByToken,
  createUser,
  login,
};

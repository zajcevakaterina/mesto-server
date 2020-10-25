const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadReqErr = require('../errors/bad-request-err');
const NotFoundErr = require('../errors/not-found-error');
const AuthErr = require('../errors/auth-error');

const { NODE_ENV, JWT_SECRET } = process.env;

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
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.status(200).send(user))
    .catch((error) => {
      if (error._message === 'user validation failed') {
        throw new BadReqErr({ message: error.message });
      } else {
        next(error);
      }
    })
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
      res.send({ jwt: token });
    })
    .catch((err) => {
      throw new AuthErr({ message: err.message });
    })
    .catch(next);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  login,
};

const User = require('../models/user');

const getAllUsers = (req, res) => User.find({})
  .then((users) => {
    if (!users) {
      res.status(404).send({ message: 'Пользователи не найдены' });
      return;
    }
    res.status(200).send({ data: users });
  })
  .catch(() => {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  });

const getUserById = (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.status(200).send(user);
  })
  .catch(() => {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  });

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((error) => {
      if (error._message === 'user validation failed') {
        res.status(400).send({ message: error.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

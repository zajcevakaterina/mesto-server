const path = require('path');
const getJsonFromFile = require('../helpers/readFile');

const getAllUsers = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      res
        .status(404)
        .send({ message: 'Пользователи не найдены' });
      return;
    }

    res
      .status(200)
      .send(data.users);
  })
  .catch((error) => {
    res
      .status(500)
      .send({ message: error.message });
  });

const getUserById = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      res
        .status(404)
        .send({ message: 'Пользователи не найдены' });
      return;
    }
    const userById = data.users.find((user) => user._id === req.params.id);

    if (!userById) {
      res
        .status(404)
        .send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res
      .status(200)
      .send(userById);
  })
  .catch((error) => {
    res
      .status(500)
      .send({ message: error.message });
  });

module.exports = {
  getAllUsers,
  getUserById,
};

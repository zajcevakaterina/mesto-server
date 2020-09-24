const Card = require('../models/card');

const getCards = (req, res) => Card.find({})
  .then((cards) => {
    if (!cards) {
      res.status(404).send({ message: 'Карточки не найдены' });
      return;
    }

    res.status(200).send({ data: cards });
  })
  .catch(() => {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  });

const createCard = (req, res) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  return Card.create({ name, link, owner: _id })
    .then((card) => res.status(200).send(card))
    .catch((error) => {
      if (error._message === 'card validation failed') {
        res.status(400).send({ message: error.message });
        return;
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

const deleteCard = (req, res) => Card.deleteOne({ _id: req.params.id })
  .then((response) => {
    if (response.deletedCount === 1) {
      res.status(200).send({ message: 'Карточка удалена' });
      return;
    }
    res.status(400).send({ message: 'Произошла ошибка' });
  })
  .catch((error) => {
    if (!error.messageFormat) {
      res.status(404).send({ message: 'Карточка не найдена' });
      return;
    }
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  });

module.exports = {
  getCards,
  createCard,
  deleteCard,
};

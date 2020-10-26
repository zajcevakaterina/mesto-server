const Card = require('../models/card');
const NotFoundErr = require('../errors/not-found-error');
const BadReqErr = require('../errors/bad-request-err');
const ServerError = require('../errors/server-error');
const ForbiddenErr = require('../errors/forbidden-error');

const getCards = (req, res, next) => Card.find({})
  .then((cards) => {
    if (!cards) {
      throw new NotFoundErr({ message: 'Карточки не найдены' });
    }
    res.status(200).send({ data: cards });
  })
  .catch(next);

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  return Card.create({ name, link, owner: _id })
    .then((card) => res.status(200).send(card))
    .catch((error) => {
      if (error._message === 'card validation failed') {
        throw new BadReqErr({ message: error.message });
      }
      throw new ServerError();
    })
    .catch(next);
};
const deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenErr({ message: 'Удалять можно только свои карточки' });
      }
      Card.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send({ message: 'Карточка удалена' }))
        .catch(next);
    })
    .catch((error) => {
      if (!error.messageFormat) {
        throw new NotFoundErr({ message: 'Карточка не найдена' });
      }
      throw new ServerError();
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => res.send(card))
    .catch((error) => {
      if (!error.messageFormat) {
        throw new NotFoundErr({ message: 'Карточка не найдена' });
      }
      throw new ServerError();
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => res.send(card))
    .catch((error) => {
      if (!error.messageFormat) {
        throw new NotFoundErr({ message: 'Карточка не найдена' });
      }
      throw new ServerError();
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};

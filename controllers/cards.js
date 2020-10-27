const Card = require('../models/card');
const NotFoundErr = require('../errors/not-found-error');
const BadReqErr = require('../errors/bad-request-err');
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
      if (error.name === 'ValidationError') {
        throw new BadReqErr({ message: error.message });
      } else {
        next(error);
      }
    });
};
const deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .orFail(new NotFoundErr({ message: 'Карточка не найдена' }))
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenErr({ message: 'Удалять можно только свои карточки' });
      } else {
        Card.findByIdAndDelete(req.params.id)
          .then(() => res.status(200).send({ message: 'Карточка удалена' }))
          .catch(next);
      }
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .orFail(new NotFoundErr({ message: 'Карточка не найдена' }))
    .then((card) => res.send(card))
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail(new NotFoundErr({ message: 'Карточка не найдена' }))
    .then((card) => res.send(card))
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};

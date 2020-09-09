const cardsRouter = require('express').Router();
const getCards = require('../controllers/cards');

cardsRouter.use('/cards', getCards);

module.exports = cardsRouter;

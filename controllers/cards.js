const path = require('path');
const getJsonFromFile = require('../helpers/readFile');

const getCards = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      res
        .status(404)
        .send({ message: 'Карточки не найдены' });
      return;
    }

    res
      .status(200)
      .send(data.cards);
  })
  .catch((error) => {
    res
      .status(500)
      .send({ message: error.message });
  });

module.exports = getCards;

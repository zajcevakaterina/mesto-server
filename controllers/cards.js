const path = require('path');
const getJsonFromFile = require('../helpers/readFile');

const getCards = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      res
        .status(500)
        .send('Данные по карточкам не найдены :(');
      return;
    }

    res
      .status(200)
      .send(data.cards);
  });

module.exports = getCards;

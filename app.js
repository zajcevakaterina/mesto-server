const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cardsRouter);
app.use(usersRouter);
app.all('*', (req, res) => res
  .status(404)
  .send({ "message": "Запрашиваемый ресурс не найден" }));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

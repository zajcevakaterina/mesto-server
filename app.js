const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.user = {
    _id: '5f6b97de603ad24b7ce33014', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(cardsRouter);
app.use(usersRouter);
app.all('*', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

const bcrypt = require('bcryptjs');
const validator = require('validator');
const mongoose = require('mongoose');

const AuthErr = require('../errors/auth-error');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]+\.[a-zA-Z0-9()]+([-a-zA-Z0-9()@:%_\\+.~#?&/=#]*)/;
        return regex.test(v);
      },
      message: 'Введена неверная ссылка',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return new AuthErr({ message: 'Неправильная почта или пароль' });
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return new AuthErr({ message: 'Неправильная почта или пароль' });
        }

        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);

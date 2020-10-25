const jwt = require('jsonwebtoken');
const AuthErr = require('../errors/auth-error');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AuthErr({ message: 'Необходима авторизация' });
  }

  const token = authorization;
  let payload;

  try {
    payload = jwt.verify(
      token,
      `${NODE_ENV === 'production' ? JWT_SECRET : 'very-secret-key'}`,
    );
  } catch (err) {
    throw new AuthErr({ message: 'Необходима авторизация' });
  }

  req.user = payload;
  next();
};

class ServerError extends Error {
  constructor() {
    super();
    this.statusCode = 500;
    this.message = 'На сервере произошла ошибка';
  }
}

module.exports = ServerError;

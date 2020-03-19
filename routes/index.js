const api = require("./api");

const initializeApi = app => {
  for (let route in api) {
    app.use(`/api/${route}`, api[route]);
  }
};

module.exports = {
  initializeApi
};

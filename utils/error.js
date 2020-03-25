const { serverError } = require("../consts/errors");
const { ErrorModel } = rootRequire("models/error");

const convertToErrorModel = error => {
  const defaultError = serverError.SERVER_ERROR;
  return new ErrorModel(
    error.status || defaultError.status,
    error.code || defaultError.code,
    error.message || error
  );
};

const handleError = (err, res) => {
  res.status(err.status).json(err);
};

module.exports = {
  convertToErrorModel,
  handleError
};

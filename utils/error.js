const errors = require("../consts/errors");
const { ErrorModel } = rootRequire("models/error");

const convertToErrorModel = error => {
  const defaultError = errors.status500.SERVER_ERROR;
  return new ErrorModel(
    error.status || defaultError.status,
    error.code || defaultError.code,
    error.message || error
  );
};

const handleError = (err, res) => {
  const { status, code, message } = err;
  res.status(statusCode).json({
    status: "error",
    status,
    message
  });
};

module.exports = {
  convertToErrorModel,
  handleError
};

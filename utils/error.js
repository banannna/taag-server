class ErrorClass extends Error {
  constructor(status, code, message) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { status, code, message } = err;
  res.status(statusCode).json({
    status: "error",
    status,
    message
  });
};

module.exports = {
  ErrorClass: ErrorClass,
  handleError
}
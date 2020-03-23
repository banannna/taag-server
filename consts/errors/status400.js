const { ErrorClass } = rootRequire("utils/error");

const CLIENT_ERROR = new ErrorClass(
  400,
  "CLIENT_ERROR",
  "this is a general client error"
);

const INVALID_GITHUB_CODE = new ErrorClass(
  400,
  "INVALID_GITHUB_CODE",
  "github code invalid"
);

const INVALID_AUTH_PROVIDER = new ErrorClass(
  400,
  "INVALID_AUTH_PROVIDER",
  "auth provider not supported"
);

const INVALID_GITHUB_TOKEN = new ErrorClass(
  400,
  "INVALID_GITHUB_TOKEN",
  "github token not valid"
);

const INVALID_USER_ID = new ErrorClass(
  400,
  "INVALID_USER_ID",
  "user id not valid"
);

module.exports = {
  CLIENT_ERROR,
  INVALID_GITHUB_CODE,
  INVALID_AUTH_PROVIDER,
  INVALID_GITHUB_TOKEN,
  INVALID_USER_ID
};

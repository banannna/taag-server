const { ErrorClass } = rootRequire("utils/error");

const SERVER_ERROR = new ErrorClass(
  500,
  "SERVER_ERROR",
  "this is a general server error"
);

const GITHUB_ERROR = new ErrorClass(
  500,
  "GITHUB_ERROR",
  "error connecting to github"
);

const MONGO_DOCUMENT_NOT_FOUND = new ErrorClass(
  500,
  "MONGO_DOCUMENT_NOT_FOUND",
  "the requested documuent was not found"
);

const MONGO_ERROR = new ErrorClass(
  500,
  "MONGO_ERROR",
  "there was an error within mongodb"
);

const ERROR_GENERATING_JWT = new ErrorClass(
  500,
  "ERROR_GENERATING_JWT",
  "error generating jwt"
);

module.exports = {
  SERVER_ERROR,
  GITHUB_ERROR,
  MONGO_DOCUMENT_NOT_FOUND,
  MONGO_ERROR,
  ERROR_GENERATING_JWT
};

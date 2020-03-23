const dotenv = require("dotenv");
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const WINSTON_LOGGING_LEVEL = "info";
const PRODUCTION_ENV = "production";

const MONGODB_URI = process.env.MONGODB_URI;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const AUTH_PROVIDERS = { github: "github" };

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30; // expires in 30 days;

module.exports = {
  NODE_ENV,
  PORT,
  WINSTON_LOGGING_LEVEL,
  PRODUCTION_ENV,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  MONGODB_URI,
  AUTH_PROVIDERS,
  JWT_SECRET,
  JWT_EXPIRE_TIME
};

const dotenv = require("dotenv");
dotenv.config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const AUTH_PROVIDERS = ["github"];

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30; // expires in 30 days;

module.exports = {
  ENVIRONMENT,
  PORT,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  MONGODB_URI,
  AUTH_PROVIDERS,
  JWT_SECRET,
  JWT_EXPIRE_TIME
};

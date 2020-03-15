const dotenv = require("dotenv");
dotenv.config();

const ENVIRONMENT = process.env.ENVIRONMENT;

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

module.exports = { ENVIRONMENT, PORT, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, MONGODB_URI };

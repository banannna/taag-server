const { JWT_SECRET, JWT_EXPIRE_TIME } = require("../config");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("./error");

const generateToken = (name, id, avatarUrl, githubToken) => {
  try {
    const data = { name, id, avatarUrl, githubToken };
    return (token = jwt.sign(data, JWT_SECRET, {
      expiresIn: JWT_EXPIRE_TIME
    }));
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error generating jwt");
  }
};

module.exports = { generateToken };

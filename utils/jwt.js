const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE_TIME } = rootRequire("config");
const errors = rootRequire("consts/errors");

const generateToken = (name, id, authProvider, githubToken) => {
  try {
    const data = { name, id, authProvider, githubToken };
    return (token = jwt.sign(data, JWT_SECRET, {
      expiresIn: JWT_EXPIRE_TIME
    }));
  } catch (err) {
    console.log(`❗ ${err}`);
    throw errors.status500.ERROR_GENERATING_JWT;
  }
};

module.exports = { generateToken };

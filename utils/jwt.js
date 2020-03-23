const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE_TIME } = rootRequire("config");
const { ErrorHandler } = rootRequire("utils/error");

const generateToken = (name, id, authProvider, githubToken) => {
  try {
    const data = { name, id, authProvider, githubToken };
    return (token = jwt.sign(data, JWT_SECRET, {
      expiresIn: JWT_EXPIRE_TIME
    }));
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error generating jwt");
  }
};

module.exports = { generateToken };

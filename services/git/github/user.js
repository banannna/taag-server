const axios = require("axios");
const validation = rootRequire("utils/validation");
const { ErrorHandler } = rootRequire("utils/error");

const getUser = async token => {
  if (!validation.githubToken(token))
    throw new ErrorHandler(400, "github token not valid");
  try {
    const config = { headers: { Authorization: `token ${token}` } };
    const res = await axios.get("https://api.github.com/user", config);
    const user = res.data;
    return {
      id: user.id,
      username: user.login,
      avatar: user.avatar
    };
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error getting github user");
  }
};

module.exports = { getUser };

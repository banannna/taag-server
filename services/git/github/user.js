const axios = require("axios");
const validation = rootRequire("utils/validation");
const { clientError, serverError } = rootRequire("consts/errors");

const getUser = async token => {
  if (!validation.githubToken(token))
    throw clientError.INVALID_GITHUB_TOKEN;
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
    throw serverError.GITHUB_ERROR;
  }
};

module.exports = { getUser };

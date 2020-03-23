const axios = require("axios");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = rootRequire("config");
const validation = rootRequire("utils/validation");
const { clientError, serverError } = rootRequire("consts/errors");

const getToken = async code => {
  if (!validation.githubCode(code)) throw clientError.INVALID_GITHUB_CODE;
  try {
    const data = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code
    };
    const config = { headers: { accept: "application/json" } };
    const res = await axios.post(
      "https://github.com/login/oauth/access_token",
      data,
      config
    );
    return res.data.access_token;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw serverError.GITHUB_ERROR;
  }
};

module.exports = { getToken };

const axios = require("axios");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = rootRequire("config");
const validation = rootRequire("utils/validation");
const errors = rootRequire("consts/errors");

const getToken = async code => {
  if (!validation.githubCode(code)) throw errors.status400.INVALID_GITHUB_CODE;
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
    throw errors.status500.GITHUB_ERROR;
  }
};

module.exports = { getToken };

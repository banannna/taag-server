const axios = require("axios");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = rootRequire("config");
const validation = rootRequire("utils/validation");
const { ErrorHandler } = rootRequire("utils/error");

const getToken = async code => {
  if (!validation.githubCode(code))
    throw new ErrorHandler(400, "github code not valid");
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
    throw new ErrorHandler(500, "error getting github token");
  }
};

module.exports = { getToken };

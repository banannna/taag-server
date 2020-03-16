const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = require("../config");
const validation = require("../utils/validation");
const { ErrorHandler } = require('../utils/error')
const axios = require("axios");

const getToken = async code => {
  if (!validation.githubCode(code))
    throw new ErrorHandler(400, "github code not valid");
  try {
    const res = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
      headers: { accept: "application/json" }
    });
    return res.data.access_token;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error getting github token");
  }
};

const getUser = async token => {
  if (!validation.githubToken(token))
    throw new ErrorHandler(400, "github token not valid");
  try {
    config = { headers: { Authorization: `token ${token}` } };
    const res = await axios.get("https://api.github.com/user", config);
    return res.data;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error getting github user");
  }
};

module.exports = {
  getToken,
  getUser
};

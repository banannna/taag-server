const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = require("../config");
const axios = require("axios");

const getToken = async code => {
  try {
    const res = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
      headers: { accept: "application/json" }
    });
    return res.data.access_token;
  } catch (err) {
    console.log("❗ " + err);
  }
};

const getUser = async token => {
  try {
    config = { headers: { Authorization: `token ${token}` } };
    const res = await axios.get("https://api.github.com/user", config);
    return res.data.id;
  } catch (err) {
    console.log("❗ " + err);
  }
};

module.exports = {
  getToken,
  getUser
};

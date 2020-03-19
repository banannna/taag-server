const { AUTH_PROVIDERS } = require("../config");

const isNotEmpty = str => str != null && str.toString().trim() != null;

const githubCode = code => isNotEmpty(code);
const githubToken = token => isNotEmpty(token);
const githubUserId = userId => isNotEmpty(userId);

const authProvider = provider => Object.values(AUTH_PROVIDERS).includes(provider);

module.exports = {
  githubCode,
  githubToken,
  authProvider,
  githubUserId
}

const User = rootRequire("models/mongodb/User");
const validation = rootRequire("utils/validation");
const errors = rootRequire("consts/errors");

const getUser = async (provider, id, createIfDosntExist = false) => {
  if (!validation.githubUserId(id)) throw errors.status400.INVALID_USER_ID;
  try {
    const authProvider = `authProviders.${provider}`;
    const user = await User.findOne({ [authProvider]: id });
    if (!user && createIfDosntExist) return createUser(authProvider, id);
    return user;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw errors.status500.MONGO_DOCUMENT_NOT_FOUND;
  }
};

const createUser = async (authProvider, id) => {
  try {
    const user = await new User({
      [authProvider]: id
    }).save();
    return user;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw errors.status500.MONGO_ERROR;
  }
};

module.exports = {
  getUser,
  createUser
};

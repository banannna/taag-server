const User = rootRequire("models/User");
const validation = rootRequire("utils/validation");
const { ErrorHandler } = rootRequire("utils/error");

const getUser = async (provider, id, createIfDosntExist = false) => {
  if (!validation.githubUserId(id))
    throw new ErrorHandler(400, "github user id not valid");
  try {
    const authProvider = `authProviders.${provider}`;
    const user = await User.findOne({ [authProvider]: id });
    if (!user && createIfDosntExist) return createUser(authProvider, id);
    return user;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error getting mongo user");
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
    throw new ErrorHandler(500, "error creating new user");
  }
};

module.exports = {
  getUser,
  createUser
};

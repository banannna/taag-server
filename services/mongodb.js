const User = require("../models/User");
const validation = require("../utils/validation");
const { ErrorHandler } = require('../utils/error')

const getUser = async (provider, id, createIfDosntExist=false) => {
  if (!validation.githubUserId(id))
        throw new ErrorHandler(400, "github user id not valid");
  try {
    const user = await User.findOne({ [provider]: id });
    if (!user && createIfDosntExist) return createUser(provider, id);
    return user;
  } catch (err) {
    console.log(`❗ ${err}`);
    throw new ErrorHandler(500, "error getting mongo user");
  }
};

const createUser = async (provider, id) => {
  console.log({
    [provider]: id
  });
  try {
    const user = await new User({
      [provider]: id
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

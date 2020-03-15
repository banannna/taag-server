const User = require("../models/User");

const getUser = async (provider, id, createIfDosntExist) => {
  try {
    const user = await User.findOne({ [provider]: id });
    if (!user && createIfDosntExist) return createUser(provider, id);
    return user;
  } catch (err) {
    console.log(`❗ ${err}`);
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
  }
};

module.exports = {
  getUser,
  createUser
};

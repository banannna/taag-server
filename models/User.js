const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthProviderSchema = new Schema(
  {
    github: {
      type: String
    }
  },
  { _id: false }
);

const UserSchema = new Schema({
  authProviders: {
    type: AuthProviderSchema
  }
});

module.exports = User = mongoose.model("Users", UserSchema);

const router = require("express").Router();
const githubService = require("../../services/github");
const mongodbService = require("../../services/mongodb");
const validation = require("../../utils/validation");
const { ErrorHandler } = require('../../utils/error')

userSignin = async (req, res) => {
  try {
    const authProvider = req.body.authProvider;
    if (!validation.authProvider(authProvider))
      throw new ErrorHandler(400, "auth provider not supported");
    if (authProvider == "github") {
      const code = req.body.code;
      const token = await githubService.getToken(code);
      const githubUser = await githubService.getUser(token);
      const mongodbUser = await mongodbService.getUser(
        `${authProvider}Auth`,
        githubUser.id,
        true
      );
      return res.json(mongodbUser);
    }
  } catch (err) {
    console.log(`❗ ${err}`);
  }
};

router.post("/", userSignin);

module.exports = router;

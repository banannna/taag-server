const router = require("express").Router();
const gitServices = require("../../services/git");
const mongodbService = require("../../services/mongodb");
const validation = require("../../utils/validation");
const { ErrorHandler } = require("../../utils/error");
const { generateToken } = require("../../utils/jwt");

userSignin = async (req, res) => {
  try {
    const authProvider = req.body.authProvider;
    if (!validation.authProvider(authProvider))
      throw new ErrorHandler(400, "auth provider not supported");
    const gitService = gitServices[authProvider];
    const code = req.body.code;
    const token = await gitService.getToken(code);
    const user = await gitService.getUser(token);
    const mongodbUser = await mongodbService.getUser(
      authProvider,
      user.id,
      true
    );
    const jwt = generateToken(
      user.username,
      mongodbUser._id,
      authProvider,
      token
    );
    return res.json({ token: jwt });
  } catch (err) {
    console.log(`❗ ${err}`);
    // TODO: ichsa code
    return res.status(err.statusCode || 500).json(err);
  }
};

router.post("/", userSignin);

module.exports = router;

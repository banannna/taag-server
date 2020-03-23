const router = require("express").Router();
const gitServices = rootRequire("services/git");
const mongodbService = rootRequire("services/mongodb");
const validation = rootRequire("utils/validation");
const { ErrorHandler } = rootRequire("utils/error");
const { generateToken } = rootRequire("utils/jwt");

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

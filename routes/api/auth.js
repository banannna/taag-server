const router = require("express").Router();
const gitServices = rootRequire("services/git");
const mongodbService = rootRequire("services/mongodb");
const validation = rootRequire("utils/validation");
const { generateToken } = rootRequire("utils/jwt");
const { clientError } = rootRequire("consts/errors");
const { convertToErrorModel } = rootRequire("utils/error");

const userSignin = async (req, res) => {
  try {
    const authProvider = req.body.authProvider;
    if (!validation.authProvider(authProvider))
      throw clientError.INVALID_AUTH_PROVIDER;
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
    err = convertToErrorModel(err);
    console.log(`❗ ${err}`);
    return res.status(err.status).json(err);
  }
};

router.post("/", userSignin);

module.exports = router;

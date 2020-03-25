const path = require("path");
global.rootRequire = module => require(path.join(__dirname, module));

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const http = require("http");
const { PORT, MONGODB_URI } = rootRequire("config");
const { initializeApi } = rootRequire("routes");
const { handleError } = rootRequire("utils/error");
const { logger } = rootRequire("utils/winston");

// connect to mongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info("mongoDB successfully connected"))
  .catch(err => logger.error(err));

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
initializeApi(app);
app.use((err, req, res, next) => {
  logger.error(err.code);
  handleError(err, res);
});

// create server
const server = http.createServer(app);
server.listen(PORT, function() {
  logger.info(`server started. listening on port ${PORT}`);
});

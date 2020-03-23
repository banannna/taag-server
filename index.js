const path = require('path');
global.rootRequire = module => require(path.join(__dirname, module));

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const http = require("http");
const { PORT, MONGODB_URI } = rootRequire("config");
const { initializeApi } = rootRequire("routes");
const { handleError } = rootRequire("utils/error");

// connect to mongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✔ mongoDB successfully connected"))
  .catch(err => console.log(`❗ ${err}`));

// create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
initializeApi(app);
app.use((err, req, res, next) => {
  handleError(err, res);
});

// create server
const server = http.createServer(app);
server.listen(PORT, function() {
  console.log(`✔ server started. listening on port ${PORT}`);
});

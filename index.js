const { PORT } = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = require("express")();
const { MONGODB_URI } = require("./config");
const { initializeApi } = require("./routes");

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✔ mongoDB successfully connected"))
  .catch(err => console.log(err));

const http = require("http").createServer(app);
// TODO:P make this a bit more protected
app.use(cors());
app.use(bodyParser.json());

initializeApi(app);

http.listen(PORT, function() {
  console.log(`✔ server started. listening on post ${PORT}`);
});

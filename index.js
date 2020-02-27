const { port } = require('./config');
const app = require('express')();

const http = require('http').createServer(app);

http.listen(port, function() {
  console.log(`listening on ${port}`);
});

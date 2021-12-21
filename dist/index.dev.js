"use strict";

require('dotenv').config();

var server = require('./api/server');

var PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
  console.log("\n** Server is listening on ".concat(PORT).black.bgBrightMagenta.underline);
});
"use strict";

var jwt = require('jsonwebtoken');

var _require = require('../../data/db-config'),
    JWT_SECRET = _require.JWT_SECRET;

function tokenBuilder(user) {
  var payload = {
    subject: user.id,
    username: user.username
  };
  var options = {
    expiresIn: '1d'
  };
  var result = jwt.sign(payload, JWT_SECRET, options);
  return result;
}

module.exports = {
  tokenBuilder: tokenBuilder
};
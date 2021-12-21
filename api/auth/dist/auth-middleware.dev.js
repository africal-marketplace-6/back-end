"use strict";

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  var token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || 'bla', function (err, decodedToken) {
      if (err) {
        res.status(401).json({
          message: 'Bad token'
        });
      } else {
        req.user_id = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      access: 'denied'
    });
  }
};
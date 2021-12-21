"use strict";

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  var token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || 'thisObscuresThePassword', function (err, decodedToken) {
      if (err) {
        res.status(401).json({
          message: 'Error'
        });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      access: 'try again'
    });
  }
};
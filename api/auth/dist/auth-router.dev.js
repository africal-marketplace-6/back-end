"use strict";

var router = require('express').Router();

var Users = require('./auth-model');

var bcrypt = require('bcryptjs');

var db = require('../../data/db-config');

var jwt = require('jsonwebtoken');

var SECRET = "shh";
router.post("/register", function (req, res, next) {
  bcrypt.hash(req.body.password, 8).then(function (hashedPassword) {
    return db('users').insert({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    }).returning(["username", "email"]).then(function (users) {
      res.json(users[0]);
    })["catch"](function (err) {
      return next(err);
    });
  });
});
router.post('/login', function (req, res, next) {
  db('users').where({
    email: req.body.email
  }).first().then(function (user) {
    if (!user) {
      res.status(401).json({
        error: "No user by that email"
      });
    } else {
      return bcrypt.compare(req.body.password, user.password).then(function (isAuthenticated) {
        if (!isAuthenticated) {
          res.status(401).json({
            error: "Unauthorized Access!"
          });
        } else {
          return jwt.sign(user, SECRET, function (error, token) {
            res.status(200).json({
              message: "Welcome ".concat(user.username, "!")
            });
          });
        }
      });
    }
  });
});
module.exports = router;
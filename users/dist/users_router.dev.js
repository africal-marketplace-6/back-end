"use strict";

var router = require('express').Router();

var Users = require('./users_model'); //const authenticate = require('../auth/authenticate-middleware')


router.get('/', function (req, res) {
  Users.find().then(function (users) {
    res.json(users);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get all users'
    });
  });
});
module.exports = router;
"use strict";

var router = require('express').Router();

var Users = require('./users_model');

var auth = require('../api/auth/auth-middleware');

router.get('/', function (req, res) {
  Users.find().then(function (users) {
    res.json(users);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get all users'
    });
  });
});
router.get('/:id', auth, function (req, res) {
  Users.findById(req.params.id).then(function (user) {
    res.status(200).json(user);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      message: 'failed to get user'
    });
  });
});
router.get('/:id/items', function (req, res) {
  Users.findItemsByUserId(req.params.id, 'user_id').then(function (items) {
    res.status(200).json(items);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      message: 'failed to get users items'
    });
  });
});
module.exports = router;
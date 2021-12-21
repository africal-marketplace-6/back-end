"use strict";

var router = require('express').Router();

var Items = require('./items_model');

router.get('/', function (req, res) {
  Items.find().then(function (items) {
    res.json(items);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get all items'
    });
  });
});
module.exports = router;
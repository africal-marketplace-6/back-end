"use strict";

var router = require('express').Router();

var Category = require('./category_model');

router.get('/', function (req, res) {
  Category.find().then(function (category) {
    res.json(category);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get all categories'
    });
  });
});
module.exports = router;
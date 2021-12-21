"use strict";

var db = require('../data/db-config');

module.exports = {
  find: find
};

function find() {
  return db('items').select("item", "price");
}
"use strict";

var db = require('../data/db-config');

module.exports = {
  find: find,
  findBy: findBy,
  findById: findById,
  findItemsByUserId: findItemsByUserId
};

function find() {
  return db('users').select("*");
}

;

function findBy(filter) {
  return db('users').select('user_id', 'username').where(filter);
}

function findById(user_id) {
  return db('users').select('user_id', 'username', 'email').where({
    user_id: user_id
  }).first();
}

function findItemsByUserId(user_id) {
  return db('items').select('item_id', 'location', 'item', 'description', 'price').where({
    user_id: user_id
  });
}
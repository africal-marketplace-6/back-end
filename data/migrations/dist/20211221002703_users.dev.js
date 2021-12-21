"use strict";

exports.up = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex.schema.createTable('users', function (tbl) {
            tbl.increments('user_id');
            tbl.string('username', 200).notNullable().unique();
            tbl.string('password', 200).notNullable();
            tbl.string("email").notNull();
          }).createTable('category', function (tbl) {
            tbl.increments('category_id');
            tbl.string('category_name', 100).notNullable();
          }).createTable('items', function (tbl) {
            tbl.increments('item_id');
            tbl.integer('user_id').unsigned().notNullable().references('user_id').inTable('users');
            tbl.integer('category_id').unsigned().notNullable().references('category_id').inTable('category');
            tbl.string('location', 100);
            tbl.string('item', 100).notNullable();
            tbl.text('description', 200);
            tbl.integer('price');
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('category').dropTableIfExists('items').dropTableIfExists('users');
};
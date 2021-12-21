"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var db = require('../../data/db-config');

module.exports = {
  add: add,
  findBy: findBy,
  findById: findById,
  find: find
};

function find() {
  return db('users').select('id', 'username');
}

function add(user) {
  var _ref, _ref2, user_id;

  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('users').insert(user));

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          user_id = _ref2[0];
          return _context.abrupt("return", findById(user_id));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(user_id) {
  return db('users').where({
    user_id: user_id
  }).first();
}
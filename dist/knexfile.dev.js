"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('dotenv').config();

var pg = require('pg');

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = {
    rejectUnauthorized: false
  };
}

var sharedConfig = {
  client: 'pg',
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  }
};
module.exports = {
  development: _objectSpread({}, sharedConfig, {
    connection: process.env.DEV_DATABASE_URL
  }),
  testing: _objectSpread({}, sharedConfig, {
    connection: process.env.TESTING_DATABASE_URL
  }),
  production: _objectSpread({}, sharedConfig, {
    connection: process.env.DATABASE_URL
  }),
  pool: {
    min: 2,
    max: 10
  }
};
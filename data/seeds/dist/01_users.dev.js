"use strict";

var hashedPassword = "$2a$14$ZubTV.NIdE/sILDucdWEsu9dhLNzmDXsgoLa/J0z3iKQqH7.kGaFm";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del().then(function () {
    // Inserts seed entries
    return knex('users').insert([{
      user_id: 1,
      username: 'test',
      password: 'password',
      email: "1234@1234.com"
    }, {
      user_id: 2,
      username: 'test2',
      password: 'password',
      email: "test@1234.com"
    }, {
      user_id: 3,
      username: 'test3',
      password: 'password',
      email: "test@123t4.com"
    }]);
  });
};
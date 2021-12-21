"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del().then(function () {
    // Inserts seed entries
    return knex('items').insert([{
      item_id: 1,
      user_id: '1',
      category_id: "1",
      location: "Miami",
      item: "Mango",
      description: 'A version of the Haden Mango, which originated in Coral Gables, Florida. The Tommy Atkins mango has since become one of the most important varieties of mango, and one of the most frequently consumed types of mango throughout the world.',
      price: '4'
    }, {
      item_id: 2,
      user_id: '1',
      category_id: "1",
      location: "Cherry Land",
      item: "Cherries",
      description: 'cherry, any of various trees belonging to the genus Prunus and their edible fruits',
      price: '7'
    }, {
      item_id: 3,
      user_id: '1',
      category_id: "2",
      location: "Potato Land",
      item: "Potatoes",
      description: 'The potato is a tuber, round or oval, with small white roots called " eyes", that are growth buds. The size varies depending on the variety; the colour of the skin can be white, yellow or even purple. The potato culture had an enormous importance in Ireland, since it was part of the basic food.',
      price: '3'
    }, {
      item_id: 4,
      user_id: '2',
      category_id: "1",
      location: "Berry Land ",
      item: "Berries",
      description: 'boxes of fresh black berries',
      price: '5'
    }, {
      item_id: 5,
      user_id: '3',
      category_id: "3",
      location: "Butter Land",
      item: "Butter",
      description: '1 pound of butter',
      price: '10'
    }, {
      item_id: 6,
      user_id: '2',
      category_id: "3",
      location: "Butter Land",
      item: "Butter from 2nd user",
      description: '1 pound of butter',
      price: '10'
    }]);
  });
};
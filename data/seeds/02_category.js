
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_id: 1, category_name: 'berries'},
        {category_id: 2, category_name: 'vegetables'},
        {category_id: 3, category_name: 'goods'}
      ]);
    });
};

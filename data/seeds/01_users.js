const hashedPassword = "$2a$14$ZubTV.NIdE/sILDucdWEsu9dhLNzmDXsgoLa/J0z3iKQqH7.kGaFm"


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test', password: hashedPassword, email: "1234@1234.com"}
      
      ]);
    });
};

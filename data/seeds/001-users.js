
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'andrew', password: 'andreww', department: 'sales'},
        {username: 'dan', password: 'dann', department: 'it'},
        {username: 'dale', password: 'dalee', department: 'cool guy'}
      ]);
    });
};

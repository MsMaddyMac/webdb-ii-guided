
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
  // REMEMBER TO CHANGE THE TABLE NAME TO THE ONE YOU WANT SEEDS FOR
  //.del() does not reset the id
    .truncate() // PREFERRED!!
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        { name: 'carrots', like_it: 1 },
        { name: 'asparagus', like_it: 1 },
        { name: 'spinach', like_it: 0 }
      ]);
    });
};

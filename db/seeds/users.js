exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', password: 'password', score: 0, avatar_url: 'http://gentwenty.com/wp-content/uploads/2014/02/Alice-in-Wonderland.jpg' }),
        knex('users').insert({id: 2, name: 'Bob', password: 'password', score: 0, avatar_url: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Bob_the_builder.jpg' }),
        knex('users').insert({id: 3, name: 'Charlie', password: 'password', score: 0, avatar_url: 'https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png' })
      ]);
    });
};

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('users', function (table) {
//     table.increments();
//     table.string('name');
//     table.string('password')
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('users');
// };

exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('password')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

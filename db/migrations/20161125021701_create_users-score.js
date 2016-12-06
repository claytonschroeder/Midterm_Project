exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('score')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

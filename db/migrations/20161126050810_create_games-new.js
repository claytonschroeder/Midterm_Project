exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function (table) {
    table.increments();
    table.string('type');
    table.integer('host_id');
    table.integer('guest_id');
    table.string('status');
    table.string('result');
    table.integer('whose_turn');
    table.integer('host_score');
    table.integer('guest_score');
    table.string('state');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};


exports.up = function(knex, Promise) {
  return knex.schema.table("games", (table) => {
    table.dropColumn("whos_turn");
    table.integer("whose_turn");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("games", (table) => {
    table.dropColumn("whose_turn");
    table.string("whos_turn");

  });

};

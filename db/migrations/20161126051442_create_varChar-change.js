exports.up = function(knex, Promise) {
  return knex.schema.table("games", (table) => {
    table.dropColumn("state");
    table.string("game_state", 550);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("games", (table) => {
    table.dropColumn("game_state");
    table.string("state");

  });

};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('neighborhoods', (table) => {
    table.increments();
    table.decimal('lat', 10, 7);
    table.decimal('long', 10, 7);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neighborhoods');
};

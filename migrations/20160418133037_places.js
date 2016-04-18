
exports.up = function(knex, Promise) {
  return knex.schema.createTable('places', (table) => {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('phone');
    table.text('description');
    table.decimal('lat', 10);
    table.decimal('long', 10);
    table.integer('neighborhood_id').references('id').inTable('neighborhoods');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('places');
};

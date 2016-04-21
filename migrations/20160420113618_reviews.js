
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.integer('user_id').references('user_id').inTable('users').notNullable();
    table.integer('place_id').references('id').inTable('places').notNullable();
    table.text('comment');
    table.integer('rating').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.unique(['user_id', 'place_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};

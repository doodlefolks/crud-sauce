exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id');
    table.text('f_name');
    table.text('l_name');
    table.text('email').unique();
    table.text('provider');
    table.text('fb_id').unique();
    table.text('pic_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};


exports.up = function(knex, Promise) {
  knex.schema.createTable('users', function(table) {
    table.increments('user_id');
    table.text('f_name');
    table.text('l_name');
    table.text('email');
    table.text('provider')
    table.text('fb_id');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
};

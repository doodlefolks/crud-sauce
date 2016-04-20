var knex = require('../db/knex');

module.exports = {
  getAllHoods: function () {
    return knex('neighborhoods').select().orderBy('name');
  },
};

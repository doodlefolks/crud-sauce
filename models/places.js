var knex = require('../db/knex');

module.exports = {
  getAllPlaces: function () {
    return knex('places');
  },
};

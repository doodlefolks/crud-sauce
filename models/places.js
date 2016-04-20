var knex = require('../db/knex');

module.exports = {
  getAllPlaces: function () {
    return knex('places');
  },
  getPlaceById: function (id) {
    return knex('places').where({id: id});
  },
};

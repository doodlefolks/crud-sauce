var knex = require('../db/knex');

module.exports = {
  getAllPlaces: function () {
    return knex('places');
  },
  getPlaceById: function (id) {
    return knex('places').where({id: id});
  },
  getPlaceReviews: function (id) {
    return knex('reviews').where({place_id: id}).orderBy('created_at');
  },
};

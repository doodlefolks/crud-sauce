var knex = require('../db/knex');

module.exports = {
  getAllPlaces: function () {
    return knex('places');
  },
  getPlaceById: function (id) {
    return knex('places').where({id: id});
  },
  getPlaceReviews: function (id) {
    return knex('reviews as r')
      .innerJoin('users as u', 'u.user_id', 'r.user_id')
      .where({place_id: id})
      .select([
        'r.comment',
        'r.rating',
        'r.created_at',
        'u.pic_url'
      ])
      .orderBy('r.created_at');
  },
};

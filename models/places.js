var knex = require('../db/knex');

module.exports = {
  getAllPlaces: function () {
    return knex('places');
  },
  getPlaceById: function (id) {
    return knex('places as p')
      .innerJoin('neighborhoods as n', 'p.neighborhood_id', 'n.id')
      .select([
        'p.id',
        'p.name',
        'p.address',
        'p.phone',
        'p.category',
        'p.description',
        'p.lat',
        'p.long',
        'n.name as hood_name'
      ])
      .where({'p.id': id});
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

var express = require('express');
var router = express.Router();
var places = require('../models/places');
var reviews = require('../models/reviews');
var users = require('../models/users');

router.get('/:index', function (req, res, next) {
  places.getPlaceById(req.params.index)
  .then(function (place) {
    res.locals.place = place[0];
    res.render('places/index');
  });
});

router.post('/:index', function (req, res, next) {
  // res.send(res.locals.user.id);
  users.getByFacebookId(res.locals.user.id).then(function (user) {
    reviews.addReview(user[0].user_id, req.params.index, req.body.comment, req.body.rating).then(function () {
      places.getPlaceById(req.params.index).then(function (place) {
        res.locals.place = place[0];
        res.render('places/index');
      });
    }).catch(function (err) {
      console.log(err);
    });
  });
});

module.exports = router;

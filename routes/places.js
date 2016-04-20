var express = require('express');
var router = express.Router();
var places = require('../models/places');
var reviews = require('../models/reviews');
var users = require('../models/users');

router.get('/:index', function (req, res, next) {
  res.locals.pageData = {};
  places.getPlaceById(req.params.index)
  .then(function (place) {
    users.getByFacebookId(res.locals.user.id).then(function (user) {
      reviews.getReview(user[0].user_id, req.params.index).then(function (review) {
        console.log(review[0]);
        if (review[0]) {
          res.locals.pageData.review = review[0];
        }
        res.locals.place = place[0];
        res.render('places/index');
      });
    });
  });
});

router.post('/:index', function (req, res, next) {
  // res.send(res.locals.user.id);
  users.getByFacebookId(res.locals.user.id).then(function (user) {
    reviews.addReview(user[0].user_id, req.params.index, req.body.comment, req.body.rating).then(function () {
      res.redirect(`/places/${req.params.index}`);
    }).catch(function (err) {
      console.log(err);
    });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var places = require('../models/places');
var reviews = require('../models/reviews');
var users = require('../models/users');

router.get('/:index', function (req, res, next) {
  res.locals.pageData = {};
  Promise.all([places.getPlaceById(req.params.index), places.getPlaceReviews(req.params.index)])
  .then(function (data) {
    res.locals.place = data[0][0];
    res.locals.comments = data[1];
    if (res.locals.user) {
      users.getByFacebookId(res.locals.user.id).then(function (user) {
        reviews.getReview(user[0].user_id, req.params.index).then(function (review) {
          if (review[0]) {
            res.locals.pageData.review = review[0];
          }
          res.render('places/index');
        });
      });
    } else {
      res.render('places/index');
    }
  });
});

router.post('/:index', function (req, res, next) {
  users.getByFacebookId(res.locals.user.id).then(function (user) {
    reviews.addReview(user[0].user_id, req.params.index, req.body.comment, req.body.rating).then(function () {
      res.redirect(`/places/${req.params.index}`);
    }).catch(function (err) {
      console.log(err);
    });
  });
});

router.put('/:index', function (req, res, next) {
  users.getByFacebookId(res.locals.user.id).then(function (user) {
    reviews.updateReview(user[0].user_id, req.params.index, req.body.comment, req.body.rating).then(function () {
      res.redirect(`/places/${req.params.index}`);
    });
  });
});

module.exports = router;

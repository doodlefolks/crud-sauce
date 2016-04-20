var express = require('express');
var router = express.Router();
var places = require('../models/places');

router.get('/:index', function(req, res, next) {
  places.getPlaceById(req.params.index)
  .then(function (place) {
    res.locals.place = place[0];
    res.render('places/index');
  });
});

module.exports = router;

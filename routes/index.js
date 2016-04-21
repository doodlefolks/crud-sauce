var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var neighborhoodsModel = require('../models/neighborhoods');
var placesModel = require('../models/places');

router.get('/', function(req, res, next) {
  var user = res.locals.user;
  Promise.all([neighborhoodsModel.getAllHoods(), placesModel.getAllPlaces()])
  .then( data => {
    var hoods = data[0];
    var places = data[1];
    res.locals.pageData = {};
    res.locals.pageData.hoods = [];
    hoods.forEach( (hood, hoodIndex) => {
      res.locals.pageData.hoods.push({
        name: hood.name,
        id: hood.id,
        lat: hood.lat,
        long: hood.long,
        places: [],
      });
      places.forEach( place => {
        if (place.neighborhood_id === hood.id) {
          res.locals.pageData.hoods[hoodIndex].places.push(place);
        }
      });
    });
    res.render('index');
  });
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;

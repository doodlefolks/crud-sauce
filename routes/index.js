var express = require('express');
var router = express.Router();
var neighborhoodsModel = require('../models/neighborhoods');
var placesModel = require('../models/places');

router.get('/', function(req, res, next) {
  Promise.all([neighborhoodsModel.getAllHoods(), placesModel.getAllPlaces()])
  .then( data => {
    var hoods = data[0];
    var places = data[1];
    res.locals.pageData = {};
    hoods.forEach( hood => {
      res.locals.pageData[hood.name] = new Array();
      places.forEach( place => {
        if (hood.id === place.neighborhood_id) {
          res.locals.pageData[hood.name].push(place);
        }
      });
    });
    res.render('index');
  });
});

module.exports = router;

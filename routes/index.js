var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var neighborhoodsModel = require('../models/neighborhoods');
var placesModel = require('../models/places');

router.get('/', function(req, res, next) {
  var user = res.locals.user;
  var accessToken = user ? user.accessToken : '';
  rp({
    uri: `https://graph.facebook.com/me?access_token=${accessToken}&fields=picture.type(small)`,
    json: true,
  }).catch(function (err) {
    res.locals.user = null;
    user = null;
  }).then(function (fbInfo) {
    Promise.all([neighborhoodsModel.getAllHoods(), placesModel.getAllPlaces()])
    .then( data => {
      var hoods = data[0];
      var places = data[1];
      if (user) res.locals.user.picUrl = fbInfo.picture.data.url;
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
});

module.exports = router;

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')




/* GET home page. */

router.get('/', function(req, res, next) {
  knex('neighborhoods').select()
  .then( hoods => {
    knex('places').select()
    .then( places => {
      res.locals.pageData = {};
      hoods.forEach( hood => {
        res.locals.pageData[hood.name] = new Array();
        places.forEach( place => {
          if (hood.id === place.neighborhood_id) {
            res.locals.pageData[hood.name].push(place);
          }
        });
      });
      res.render('index', {places});
    });
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  function spots() {
    return knex('places').select('address');
  }
  spots().then(function(address){
    console.log(encodeURIComponent(address[0].address));
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;

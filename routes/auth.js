var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;

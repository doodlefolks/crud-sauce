var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');
require('dotenv').load();
var User = require('models/users.js');
var unirest = require('unirest');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY]
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
passport.use(new FacebookStrategy({
 clientID: FACEBOOK_APP_ID,
 clientSecret: FACEBOOK_APP_SECRET,
 callbackURL: process.env.HOST + '/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {

  User.fbLogin(profile, function(err, user) {
    if (err) {
      return done(err);
    }
    else {
      done(null, user);
    }

  })
}));

app.use(passport.session(app.locals.accessToken));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.use(unirest());

app.use('/', routes);
app.use('/users', users);

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

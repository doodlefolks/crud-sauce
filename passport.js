var passport = require('passport');
var users = require('./models/users');

passport.authCallback = function (accessToken, refreshToken, profile, done) {
  users.getByFacebookId(profile.id)
  .then(function (user) {
    if (!user[0]) {
      users.addUser(profile)
      .then(function () {
        done(null, {id: profile.id, displayName: profile.displayName});
      });
    } else {
      done(null, {id: profile.id, displayName: profile.displayName});
    }
  });
};

module.exports = passport;

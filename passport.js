var passport = require('passport');
var users = require('./models/users');

passport.authCallback = function (accessToken, refreshToken, profile, done) {
  // console.log(profile);
  console.log(accessToken);
  users.getByFacebookId(profile.id)
  .then(function (user) {
    if (!user[0]) {
      users.addUser(profile)
      .then(function () {
        done(null, {id: profile.id, displayName: profile.displayName, accessToken: accessToken});
      });
    } else {
      done(null, {id: profile.id, displayName: profile.displayName, accessToken: accessToken});
    }
  });
};

module.exports = passport;

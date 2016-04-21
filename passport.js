var passport = require('passport');
var users = require('./models/users');
var rp = require('request-promise');

passport.authCallback = function (accessToken, refreshToken, profile, done) {
  users.getByFacebookId(profile.id)
  .then(function (user) {
    if (!user[0]) {
      rp({
        uri: `https://graph.facebook.com/me?access_token=${accessToken}&fields=picture.type(small)`,
        json: true,
      }).catch(function () {
        profile.picUrl = null;
      }).then(function (fbInfo) {
        profile.picUrl = fbInfo.picture.data.url;
        users.addUser(profile)
        .then(function () {
          done(null, {id: profile.id, displayName: profile.displayName, accessToken: accessToken, picUrl: profile.picUrl});
        });
      });
    } else {
      done(null, {id: profile.id, displayName: profile.displayName, accessToken: accessToken, picUrl: profile.picUrl});
    }
  });
};

module.exports = passport;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../Models/User-Model");

const options = {
  secretOrKey: process.env.SECRET_KEY,
};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (userFromPayload, done) => {
      User.findById(userFromPayload.user._id)
        .then((user) => {
          if (user) return done(null, user);
          done(null, false);
        })
        .catch((err) => done(err, false));
    })
  );
};

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// SELECT * FROM Utilisateurs WHERE id = ? and (role = 'admin' or role = 'manager' )
const SECRET = "kfjngiurhguioghtiou";
const conn = require('./database')
module.exports = function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET || SECRET;

  passport.use('admin-rule',
    new JwtStrategy(opts, function (jwt_payload, done) {
      conn.query(
        "SELECT * FROM Utilisateurs WHERE id = ? and role = ? and examinateur = ? and roleAdmin = ? ",
        [jwt_payload.results[0].id, jwt_payload.results[0].role, jwt_payload.results[0].examinateur, jwt_payload.results[0].roleAdmin], 
        function (err, user) {
          if (err) {
            console.log(err);
            return done(err, false);
          }
          if (user.length > 0) {
            return done(null, user);
          }
          else{
            return done(null, false);
          }
        }
      );
    })
  );
};
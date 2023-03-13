import passport from 'passport-saml';

passport.use(
  new SamlStrategy(
    {
      path: "/login/callback",
      entryPoint:
        "https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php",
      issuer: "passport-saml",
      cert: "fake cert", // cert must be provided
    },
    function (profile, done) {
      // for signon
      findByEmail(profile.email, function (err, user) {
        if (err) {
          return done(err);
        }
        return done(null, user);
      });
    },
    function (profile, done) {
      // for logout
      findByNameID(profile.nameID, function (err, user) {
        if (err) {
          return done(err);
        }
        return done(null, user);
      });
    }
  )
);
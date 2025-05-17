const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Auth = require("../model/authModel");
const bcrypt = require("bcrypt");

passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
  const user = await Auth.findOne({ email });
  if (!user) return done(null, false, { message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return done(null, false, { message: "Incorrect password" });

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Auth.findById(id);
  done(null, user);
});

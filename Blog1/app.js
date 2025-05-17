const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const app = express();

require("./config/db");
require("./config/passport");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use("/", authRoutes);
app.use("/", userRoutes);

app.listen(8000, () => {
  console.log("Server running");
});

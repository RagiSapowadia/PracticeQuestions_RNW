const Auth = require("../model/authModel");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const exists = await Auth.findOne({ email });
  if (exists) return res.send("User already exists.");
  await Auth.create({ email, password });
  res.redirect("/login");
};

exports.login = (req, res) => {
  // Handled by Passport middleware
};

exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return res.send("Error logging out.");
    res.redirect("/login");
  });
};

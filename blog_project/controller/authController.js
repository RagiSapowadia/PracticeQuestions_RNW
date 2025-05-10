const AuthModel = require("../model/authModel");

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const existing = await AuthModel.findOne({ email });
    if (existing) return res.send("User already exists.");
    await AuthModel.create({ email, password });
    res.redirect("/login");
};
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await AuthModel.findOne({ email, password });
    if (!user) return res.send("Invalid credentials.");
    req.session.user = user;      
    res.redirect("/");
};


 

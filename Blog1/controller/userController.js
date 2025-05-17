const userModel = require("../model/userModel");
const fs = require("fs");

exports.getHome = async (req, res) => {
    const data = await userModel.find();
    res.render("home", { data, editUser: null });
};

exports.addUser = async (req, res) => {
    const { username, description } = req.body;
    let image = req.file ? req.file.path : "";
    await userModel.create({ username, description, image });
    res.redirect("/");
};

exports.editUser = async (req, res) => {
    const data = await userModel.find();
    const editUser = await userModel.findById(req.params.id);
    res.render("home", { data, editUser }); 
};

exports.updateUser = async (req, res) => {
    const { username, description } = req.body;
    const user = await userModel.findById(req.params.id);
    let updateData = { username, description };

    if (req.file) {
        if (user.image) fs.unlink(user.image, () => {});
        updateData.image = req.file.path;
    }

    await userModel.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/");
};


exports.deleteUser = async (req, res) => {
    const id = req.query.id;
    const user = await userModel.findById(id);
    if (user.image) fs.unlink(user.image, () => {});
    await userModel.findByIdAndDelete(id);
    res.redirect("/");
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user || user.password !== password) {
        return res.send("Invalid credentials");
    }

    req.session.user = { email: user.email };

    res.redirect('/');
};

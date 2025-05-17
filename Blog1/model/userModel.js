const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    description: String,
    image: String
})

const userModel = new mongoose.model("user", userSchema)
module.exports = userModel
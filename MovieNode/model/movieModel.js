const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    director: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("Movie", movieSchema) 
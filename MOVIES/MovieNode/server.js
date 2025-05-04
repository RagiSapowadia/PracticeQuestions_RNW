const express = require("express")
const db = require("./config/db")
const movieModel = require("./model/movieModel")
const multer = require("multer")
const path = require("path")
// const { fstat } = require("fs")
const fs = require("fs");
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single("image")

// Add new movie
app.post("/api/movies", upload, async (req, res) => {
    const { name, releaseDate, director } = req.body
    let image = ""
    if (req.file) {
        image = req.file.path
    }
    const data = await movieModel.create({
        name: name,
        releaseDate: releaseDate,
        director: director,
        image: image
    })
    return res.json(data)
})

// Get all movies
app.get("/api/movies", async (req, res) => {
    const data = await movieModel.find()
    res.json(data)
})

// Get single movie
app.get("/api/movies/:id", async (req, res) => {
    const movie = await movieModel.findById(req.params.id)
    res.json(movie)
})

// Update movie
app.put("/api/movies/:id", upload, async (req, res) => {
    const { name, releaseDate, director } = req.body
    const movie = await movieModel.findById(req.params.id)
    let updateData = { name, releaseDate, director }

    if (req.file) {
        if (movie.image) {
            fs.unlink(movie.image, () => {
                console.log("Old image deleted")
            })
        }
        updateData.image = req.file.path
    }

    const updatedMovie = await movieModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
    )
    res.json(updatedMovie)
})

// Delete movie
app.delete("/api/movies/:id", async (req, res) => {
    const movie = await movieModel.findById(req.params.id)
    
    if (movie.image) {
        fs.unlink(movie.image, () => {
            console.log("Image deleted")
        })
    }

    await movieModel.findByIdAndDelete(req.params.id)
    res.json({ message: "Movie deleted successfully" })
})

app.listen(8880, () => {
    console.log("server listen http://localhost:8880")
})


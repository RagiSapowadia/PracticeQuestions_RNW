const express = require("express")
const { addbook, getbook, updatebook, deletebook } = require("../controller/userController")

const bookstore = express.Router()

bookstore.post("/add",addbook)
bookstore.get("/get",getbook)
bookstore.patch("/update/:id",updatebook)
bookstore.delete("/delete/:id",deletebook)

module.exports = bookstore
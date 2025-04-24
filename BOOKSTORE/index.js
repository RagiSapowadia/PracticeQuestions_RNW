const express = require("express")
const db = require("./config/db")
const bookstore = require("./routes/userRoute")
const app = express()

const cors = require("cors")  // bridge btwn frontend and backend
app.use(cors())

app.use(express.json())
app.use("/book",bookstore)

app.listen(7687,()=>{
  console.log("server running");
})
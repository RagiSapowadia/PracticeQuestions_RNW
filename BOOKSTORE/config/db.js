const mongoose = require("mongoose")
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection
db.on("connected",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})
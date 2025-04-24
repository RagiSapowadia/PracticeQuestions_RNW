const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ragisapovadia:ragisapowadia17@cluster0.jrjdxni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection
db.on("connected",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})
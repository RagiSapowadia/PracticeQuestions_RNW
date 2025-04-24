const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title:{
    type:String
  },
  author:{
    type:String
  },
  price:{
    type:Number
  },

})

const bookModel = new mongoose.model("book",bookSchema)
module.exports= bookModel

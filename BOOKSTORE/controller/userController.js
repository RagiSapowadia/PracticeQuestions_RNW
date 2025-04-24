const bookModel = require("../model/bookModel")

const addbook = async (req,res)=>{
  const data = await bookModel.create(req.body)
  res.send(data)
}

const getbook = async (req,res)=>{
  const data = await bookModel.find()
  res.send(data)
}
const updatebook = async (req,res) =>{
  const id = req.params.id
  const data = await bookModel.findByIdAndUpdate(id,req.body)
  res.send(data)
}

const deletebook = async (req,res)=>{
  const id = req.params.id
  const data = await bookModel.findByIdAndDelete(id)
  res.send("success")
}

module.exports ={addbook,getbook,updatebook,deletebook}
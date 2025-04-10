const express = require("express")

const app = express()
app.set("view engine", "ejs");

app.use(express.static("public"))
const middleware = (req,res,next)=>{
    if(req.query.age >=18){
        next()
    }
}


app.get("/",(req,res)=>{
    return res.render("index")
})
app.get("/home",(req,res)=>{
    return res.send("home page")
})
app.get("/contact",middleware,(req,res)=>{
    return res.send("contact page")
})


app.use(middleware)
app.listen(6789,()=>{
    console.log("server listen")
})
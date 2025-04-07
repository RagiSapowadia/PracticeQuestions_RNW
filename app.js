const http = require("http")
const server = http.createServer((req, res) => {
    
    const path = req.url;
    const method = req.method;
    console.log(Date(), path, method)

 
    if (path.includes("demo") && method == "GET") {
        res.write("Hello World")
    }
    else {
        res.write("nothing to show")
    }
    res.end();
})

server.listen(7702, () => {
    console.log("server listen")
})

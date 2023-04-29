const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hola mundo")
})

server.listen(4150, () => {
    console.log("Server executed on port 6000")
})
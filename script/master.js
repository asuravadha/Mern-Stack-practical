const {data}=require("./module/data")
console.log("hai");
console.log("hi this is nodemon");
console.log(data("Eswar","24"));
const http=require("http");

const server=http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end("./index.html");
});

server.listen(8000);

const http=require("http")
const fs=require("fs");

function server(data){
  http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write(data);

  res.end();

}).listen(8000);
}

fs.readFile("index.html",function(err,data){
  console.log(data);
  if(err){
    throw err;
  }
  else{
    console.log("server is ready");
  server(data);
  }

});

fs.watch("index.html",function(){
  fs.readFile("index.html",function(err,data){
    console.log(data);
    if(err){
      throw err;
    }
    else{
      console.log("refreshed");
    server(data);
    }

  });
})















//  const fs=require("fs");
// const filename="target.txt";
//
// const data=fs.readFileSync(filename);
// console.log(data.toString());
//
// console.log("Now watching target.txt for file changes");









// const fs=require("fs");
// const filename="target.txt";
// fs.readFile(filename,(err,data)=>{
//   if(err){
//     throw err;
//   }
//   else{
//     console.log(data.toString());
//   }
// })
//
// fs.watch("target.txt",()=>console.log(" changes in target file detected"));
// console.log("now listening to target file1");










// const {data}=require("./module/data")
// console.log("hai");
// console.log("hi this is nodemon");
// console.log(data("Eswar","24"));
// const http=require("http");
//
// const server=http.createServer(function(req,res){
//   res.writeHead(200,{"Content-Type":"text/html"});
//   res.end("./index.html");
// });
//
// server.listen(8000);







// const http=require("http");
// var fs=require("fs");
//
// const PORT=8000;
//
// function passdata(){
//   fs.readFile("index.html",function(err,html){
//     if(err) {throw err};
//     const server=http.createServer(function(req,res){
//       res.writeHead(200,{"Content-Type":"text/html"});
//       res.write(html);
//       res.end();
//     });
//     server.listen(PORT);
//   });
// }
//
// fs.watch("index.html",()=>{})

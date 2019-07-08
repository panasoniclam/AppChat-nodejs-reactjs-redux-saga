const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(3000);

//user array
var User = ["AAA"];

io.on("connection",function(socket){
    console.log("connect from "+ socket.id);
    socket.on("disconnect",()=>{
        console.log(socket.id+"connect not success");
    })
    socket.on("client-send-data",data=>{
        console.log(data)
        io.sockets.emit("server-send-data",data);
    })
    socket.on("client-send-Username",function(data){
        
        if(User.indexOf(data)>=0){
            socket.emit("server-send-fail");
        }
        else{
           User.push(data);
           socket.emit("server-send-success",data)
        }
    })
});
app.get("/",function(req,res){
    res.render("index");
});
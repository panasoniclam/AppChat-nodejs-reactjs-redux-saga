const socket = io("http://localhost:3000")
// socket.on("server-send-data",function(data){
//   $("#contendh1").append(data)
// })
$(document).ready(function(){
// $("#contend").click(function(){
//    socket.emit("client-send-data","lamnn8");
// });
  $("#loginForm").show();
  $("#chatForm").hide();
});
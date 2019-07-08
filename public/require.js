const socket = io("http://localhost:3000")
// socket.on("server-send-data",function(data){
//   $("#contendh1").append(data)
// })
socket.on("server-send-fail",function(){
  alert("sai user name, user da ton tai");
})
socket.on("server-send-success",function(data){
  alert("register succuss");
  $("#currentUser").html(data);
  $("#loginForm").hide(2000);
  $("#chatForm").show(1000);
})
$(document).ready(function(){
// $("#contend").click(function(){
//    socket.emit("client-send-data","lamnn8");
// });
  $("#loginForm").show();
  $("#chatForm").hide();
  $("#btnRegister").click(function(){
    socket.emit("client-send-Username",$("#txtUsername").val());
  });
});
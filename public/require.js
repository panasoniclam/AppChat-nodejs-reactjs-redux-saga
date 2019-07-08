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
socket.on("server-send-user",function(data){
  $("#boxContend").html("");
  data.forEach(element => {
    $("#boxContend").append("<div class='user'>"+element+"</div>")
    
  });
})
socket.on('server-send-message',function(data){
   $("#listMessage").append("<div class='ms'>"+data.un+":"+data.nd+"</div>")
});
socket.on("ai-do-dang-go-chu",function(data){
  $("#thongbao").html(data);
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
  $("#btnLogout").click(function(){
    socket.emit("client-logout");
    $("#loginForm").show();
    $("#chatForm").hide();
  });
  $("#btnSendMessage").click(function(){
    socket.emit("user-send-message",$("#txtMessage").val());
  });
  $("#txtMessage").forcusin(function(){
    socket.emit("toi-dang-go-chu");
  });
  $("#txtMessage").forcusout(function(){
    socket.emit("toi-ngung-go-chu");
  })
});
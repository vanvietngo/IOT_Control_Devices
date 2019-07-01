var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .
$(document).ready(function(){
  socket.emit("Client-send-infor-User-Online",   {
    user: $('#UserName').text(),
    avatar:$('.avatarUser').attr('src')
  }
);

  socket.on("Server-send-list-infor-User-Online", function (data) {
    data.forEach(function(i){
      $(".ListUserOnline").append("<img src=" + i.avatar +" alt='Avatar' class='avatar dropdown-toggle'id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>");
    });
  });

}
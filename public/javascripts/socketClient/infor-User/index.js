var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .
$(document).ready(function() {
    socket.emit("Client-send-infor-User-Online", {
        user: $('#UserName').text(),
        avatar: $('.avatarUser').attr('src')
    });
})
socket.on("Server-send-list-infor-User-Online", function(data) {
    $(".ListUserOnline").html("");
    data.ArrUser.forEach(function(i) {
      console.log("data.arrUser[ArrUser.indexOf(i)] = "+data.arrUser[data.ArrUser.indexOf(i)]);
      console.log('so = ' + data.ArrUser.indexOf(i));
        $(".ListUserOnline").append("<img src=" + i +
        " alt='Avatar' class='img-thumbnail avatar dropdown-toggle'id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"
      +"  <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>"
        +"  <button class='dropdown-item' type='button'>"+
          data.arrUser[data.ArrUser.indexOf(i)]
        +"</button>"
      +"  </div>");
    });
});

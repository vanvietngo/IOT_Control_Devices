var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .
$(document).ready(function() {
    socket.emit("Client-send-infor-User-Online", {
        user: $('#UserName').text(),
        avatar: $('.avatarUser').attr('src')
    });
})
socket.on("Server-send-list-infor-User-Online", function(data) {
    $(".each-User").remove();
  //   data.ArrUser.forEach(function(i) {
  //     console.log(data)
  //     console.log('i = ' + [data.ArrUser.indexOf(i)]);
  //     console.log('arrName(i) = ' + [data.ArrUser.indexOf(i)] + "  " + data.arrName[data.ArrUser.indexOf(i)]);
  //     // console.log("data.arrUser[ArrUser.indexOf(i)] = "+data.arrUser[data.ArrUser.indexOf(i)]);
  //     // console.log('so = ' + data.ArrUser.indexOf(i));
  //       $(".ListUserOnline").append("<img src=" + i +
  //       " alt='Avatar' class='img-thumbnail avatar dropdown-toggle'id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"
  //     +"  <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>"
  //       +"  <button class='dropdown-item' type='button'>"+
  //         data.arrName[data.ArrUser.indexOf(i)]
  //       +"</button>"
  //     +"  </div>"
  //   )
  // });
      console.log(data)

for(i = 0; i < data.ArrUser.length;i++){
var temp = data.arrName[i];
$(".UserOnline").append("<div class='dropdown ava each-User'>"+
  "<img src='"+data.ArrUser[i] +" alt='Avatar' class='avatar dropdown-toggle avatarUser'id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+
  "<div class='dropdown-menu' aria-labelledby='dropdownMenu2'>"+
    "<button class='dropdown-item' type='button'>"+temp+"</button>"+
  "</div>"+
"</div>");

}

});

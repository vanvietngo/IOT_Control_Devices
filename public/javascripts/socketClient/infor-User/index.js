var socket = io.connect(
    'http://vanvietonline.herokuapp.com/'
);
// lay time tu node luon .
$(document).ready(function() {
    socket.emit("Client-send-infor-User-Online", {
        user: $('#UserName').text(),
        avatar: $('.avatarUser').attr('src')
    });
})

socket.on(
    "Server-send-list-infor-User-Online",
    function(data) {
        $(".each-User").remove();
        console.log(data)
            // display value name of each user
        for(i = 0; i < data.ArrUser.length; i++) {
            var temp = data.arrName[i];
            $(".UserOnline").append(
                "<div class='dropdown ava each-User'>" +
                "<img src='" +
                data.ArrUser[i] +
                " alt='Avatar' class='avatar dropdown-toggle avatarUser'id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" +
                "<div class='dropdown-menu' aria-labelledby='dropdownMenu2'>" +
                "<button class='dropdown-item' type='button'>" +
                temp +
                "</button>" +
                "</div>" +
                "</div>");
        }
    });

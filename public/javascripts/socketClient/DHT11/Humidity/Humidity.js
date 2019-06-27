var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .

socket.on("Humidity-client", function (data) {
    $(".da")
        .html(data.Humidity + " %");
    $(".timee")
        .html("<br>"+Date());
});

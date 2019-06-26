var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .

socket.on("Humidity-client", function (data) {
    $(".da")
        .html("Humidity: " + data.Humidity + " %");
    $(".timee")
        .html("Day - time: " + Date());
});

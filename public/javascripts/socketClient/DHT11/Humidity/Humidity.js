var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Humidity-client", function (data) {
    $(".da")
        .html("Humidity: " + data.Humidity + " %");
});

var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Temperature-client", function (data) {
    $(".nt")
        .html("Temp: " + "<br>" + data.Temperature + " *C");
});

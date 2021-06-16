var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("time-client", function (data) {
    $(".timee")
        .html("Day - time: " + Date());
});

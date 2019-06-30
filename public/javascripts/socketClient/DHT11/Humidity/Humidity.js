var socket = io.connect('http://vanvietonline.herokuapp.com/');
// lay time tu node luon .

socket.on("Humidity-client", function (data) {
  var now = new Date();

    $(".da")
        .html(data.Humidity + " %");
    $(".timee")
        .html("<br>"+new Date(now + " GMT-0700").toUTCString());
        console.log("time = " + new Date(now + " GMT-0700").toUTCString());
        console.log("time before = " + now);

});

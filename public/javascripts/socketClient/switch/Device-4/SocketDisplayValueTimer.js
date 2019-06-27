var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-4", function () {
    $(".value-timer-lamp-4").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-4", function (data) {
  $(".value-timer-lamp-4").html("After  " + data + " s Lamp OFF").show();
});


socket.on("Server-send-Cancel-Timer-4", function () {
$(".value-timer-lamp-4").html("Canceled").hide(4000);
});

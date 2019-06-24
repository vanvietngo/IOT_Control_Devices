var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-2", function () {
    $(".value-timer-lamp-2").html("Time out").hide(4000);
    console.log("Server-send-Timeout-2 " );

});


socket.on("Server-send-ValueTimer-2", function (data) {
  $(".value-timer-lamp-2").html("After  " + data + " s Lamp OFF").show();
    console.log("SServer-send-ValueTimer-2 " );
});


socket.on("Server-send-Cancel-Timer-2", function () {
$(".value-timer-lamp-2").html("Canceled").hide(4000);
});

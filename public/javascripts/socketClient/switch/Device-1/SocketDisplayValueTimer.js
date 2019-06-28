var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-1", function () {
    $(".value-timer-lamp-1").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-1", function (data) {
  if ($("#btn1").is(':checked')) {
    $(".value-timer-lamp-1").html("After  " + data + " s Lamp OFF").show();
  } else {
    $(".value-timer-lamp-1").html("After  " + data + " s Lamp ON").show();
  }
});


socket.on("Server-send-Cancel-Timer-1", function () {
$(".value-timer-lamp-1").html("Canceled").hide(4000);
});

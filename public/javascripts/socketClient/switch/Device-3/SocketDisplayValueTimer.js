var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-3", function () {
    $(".value-timer-lamp-3").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-3", function (data) {
  if ($("#btn3").is(':checked')) {
    $(".value-timer-lamp-3").html("After  " + data + " s Lamp OFF").show();
  } else {
    $(".value-timer-lamp-3").html("After  " + data + " s Lamp ON").show();
  }
});


socket.on("Server-send-Cancel-Timer-3", function () {
$(".value-timer-lamp-3").html("Canceled").hide(4000);
});

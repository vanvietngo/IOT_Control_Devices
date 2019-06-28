var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-2", function () {
    $(".value-timer-lamp-2").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-2", function (data) {
  if ($("#btn2").is(':checked')) {
    $(".value-timer-lamp-2").html("After  " + data + " s Lamp OFF").show();
  } else {
    $(".value-timer-lamp-2").html("After  " + data + " s Lamp ON").show();
  }
});


socket.on("Server-send-Cancel-Timer-2", function () {
$(".value-timer-lamp-2").html("Canceled").hide(4000);
});

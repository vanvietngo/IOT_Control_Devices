var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-5", function () {
    $(".value-timer-lamp-5").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-5", function (data) {
  if ($("#btn5").is(':checked')) {
    $(".value-timer-lamp-5").html("After  " + data + " s Lamp OFF").show();
  } else {
    $(".value-timer-lamp-5").html("After  " + data + " s Lamp ON").show();
  }
});


socket.on("Server-send-Cancel-Timer-5", function () {
$(".value-timer-lamp-5").html("Canceled").hide(4000);
});

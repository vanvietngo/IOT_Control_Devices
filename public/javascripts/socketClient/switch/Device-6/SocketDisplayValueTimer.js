var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout-6", function () {
    $(".value-timer-lamp-6").html("Time out").hide(4000);
});


socket.on("Server-send-ValueTimer-6", function (data) {
  if ($("#btn6").is(':checked')) {
    $(".value-timer-lamp-6").html("After  " + data + " s Lamp OFF").show();
  } else {
    $(".value-timer-lamp-6").html("After  " + data + " s Lamp ON").show();
  }
});


socket.on("Server-send-Cancel-Timer-6", function () {
$(".value-timer-lamp-6").html("Canceled").hide(4000);
});

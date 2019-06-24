var socket = io.connect('http://vanvietonline.herokuapp.com/');


socket.on("Server-send-Timeout", function () {
    // $(".value-timer-lamp-1").html("Time out").hide(4000);
    console.log('Server-send-Timeout');
});


socket.on("Server-send-ValueTimer", function (data) {
  // $(".value-timer-lamp-1").html("After  " + data + " s Lamp OFF").show();
  console.log('Server-send-ValueTimer =>  ' + data);

});


socket.on("Server-send-Cancel-Timer", function () {
// $(".value-timer-lamp-1").html("Canceled").hide(4000);
console.log('Server-send-Cancel-Timer');

});

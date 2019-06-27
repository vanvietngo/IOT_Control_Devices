var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer after display value on web
function FunLampOn3(valueChangee, timerForLamp0){
  var LampOn = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(LampOn);
        socket.emit("Client-send-Timeout-3");

    } else {
        valueChangee -= 1;
        socket.emit("Client-send-ValueTimer-3", valueChangee);
    }
}, 1000);

// Cancel timer for lamp
$(".button-timer-Lamp-3-Cancel").click(function() {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  // $(".value-timer-lamp-1").show(2000);
  socket.emit("Client-send-Cancel-Timer-3");
});

// khi dang dem timer ma on off switch thi cancel timer

socket.on('server-send-lamp3-on', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-3");
});

socket.on('server-send-lamp2-off', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-3");
});
}
//--------------------------

function FunLampOff3(valueChangee, timerForLamp1){
  var LampOff = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(LampOff);
          socket.emit("Client-send-Timeout-3");

      } else {
          valueChangee -= 1;
          socket.emit("Client-send-ValueTimer-3", valueChangee);
      }
  }, 1000);

  // Cancel timer for lamp
  $(".button-timer-Lamp-3-Cancel").click(function() {
    clearTimeout(timerForLamp1);
    clearInterval(LampOff);
    socket.emit("Client-send-Cancel-Timer-3");
    });

    // khi dang dem timer ma on off switch thi cancel timer
        socket.on('server-send-lamp3-on', function (data) {
          clearTimeout(timerForLamp1);
          clearInterval(LampOff);
          socket.emit("Client-send-Cancel-Timer-3");
        });

        socket.on('server-send-lamp3-off', function (data) {
          clearTimeout(timerForLamp1);
          clearInterval(LampOff);
          socket.emit("Client-send-Cancel-Timer-3");
        });
}
//-----------------------  main.js -------------------

$(".button-timer-Lamp-3-Active").click(function() {

  // handle switch on - off after a period time
  // Function timer for Lamp use setTimeout() -- Lamp isn't checking
  var timerForLamp3 = setTimeout(function() {
      if ($("#btn3").is(':checked')) {
          socket.emit("client-send-lamp3-off", "off");
      } else {
          socket.emit("client-send-lamp3-on", "on");
      }
  }, $(".timer-Lamp-3").val() * 1000);

    var valueChange3 = $(".timer-Lamp-3").val();
    // -- display value timer realtime
    // -- button is checking
    if ($("#btn3").is(':checked')) {
        var LampOn3 = FunLampOn2(valueChange3, timerForLamp3);

    } else {
      // -- button ism't checking
      var LampOff3 = FunLampOff2(valueChange3, timerForLamp3);
    }


});

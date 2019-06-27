var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer after display value on web
function FunLampOn2(valueChangee, timerForLamp0){
  var LampOn = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(LampOn);
        socket.emit("Client-send-Timeout-2");

    } else {
        valueChangee -= 1;
        socket.emit("Client-send-ValueTimer-2", valueChangee);
    }
}, 1000);

// Cancel timer for lamp
$(".button-timer-Lamp-2-Cancel").click(function() {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  // $(".value-timer-lamp-1").show(2000);
  socket.emit("Client-send-Cancel-Timer-2");
});

// khi dang dem timer ma on off switch thi cancel timer

socket.on('server-send-lamp2-on', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-2");
});

socket.on('server-send-lamp2-off', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-2");
});
}
//--------------------------

function FunLampOff2(valueChangee, timerForLamp1){
  var LampOff = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(LampOff);
          socket.emit("Client-send-Timeout-2");

      } else {
          valueChangee -= 1;
          socket.emit("Client-send-ValueTimer-2", valueChangee);
      }
  }, 1000);

  // Cancel timer for lamp
  $(".button-timer-Lamp-2-Cancel").click(function() {
    clearTimeout(timerForLamp1);
    clearInterval(LampOff);
    socket.emit("Client-send-Cancel-Timer-2");
    });

    // khi dang dem timer ma on off switch thi cancel timer
        socket.on('server-send-lamp2-on', function (data) {
          clearTimeout(timerForLamp1);
          clearInterval(LampOff);
          socket.emit("Client-send-Cancel-Timer-2");
        });

        socket.on('server-send-lamp2-off', function (data) {
          clearTimeout(timerForLamp1);
          clearInterval(LampOff);
          socket.emit("Client-send-Cancel-Timer-2");
        });
}
//-----------------------  main.js -------------------

$(".button-timer-Lamp-2-Active").click(function() {

  // handle switch on - off after a period time
  // Function timer for Lamp use setTimeout() -- Lamp isn't checking
  var timerForLamp2 = setTimeout(function() {
      if ($("#btn2").is(':checked')) {
          socket.emit("client-send-lamp2-off", "off");
      } else {
          socket.emit("client-send-lamp2-on", "on");
      }
  }, $(".timer-Lamp-2").val() * 1000);

    var valueChange2 = $(".timer-Lamp-2").val();
    // -- display value timer realtime
    // -- button is checking
    if ($("#btn2").is(':checked')) {
        var LampOn2 = FunLampOn2(valueChange2, timerForLamp2);

    } else {
      // -- button ism't checking
      var LampOff2 = FunLampOff2(valueChange2, timerForLamp2);
    }


});

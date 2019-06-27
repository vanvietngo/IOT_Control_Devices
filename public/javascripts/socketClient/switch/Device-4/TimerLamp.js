var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer after display value on web
function FunLampOn4(valueChangee, timerForLamp0){
  var LampOn = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(LampOn);
        socket.emit("Client-send-Timeout-4");

    } else {
        valueChangee -= 1;
        socket.emit("Client-send-ValueTimer-4", valueChangee);
    }
}, 1000);

// Cancel timer for lamp
$(".button-timer-Lamp-4-Cancel").click(function() {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-4");
});


// khi dang dem timer ma on off switch thi cancel timer

socket.on('server-send-lamp4-on', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-4");
});

socket.on('server-send-lamp4-off', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-4");
});

}
//--------------------------




function FunLampOff4(valueChangee, timerForLamp1){
  var LampOff = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(LampOff);
          socket.emit("Client-send-Timeout-4");
          // $(".value-timer-lamp-1").html("Time out").hide(4000);

      } else {
          valueChangee -= 1;
          socket.emit("Client-send-ValueTimer-4", valueChangee);
      }
  }, 1000);

  // Cancel timer for lamp
  $(".button-timer-Lamp-4-Cancel").click(function() {
    clearTimeout(timerForLamp1);
    clearInterval(LampOff);
    socket.emit("Client-send-Cancel-Timer-4");
    });

// khi dang dem timer ma on off switch thi cancel timer
    socket.on('server-send-lamp4-on', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-4");
    });

    socket.on('server-send-lamp4-off', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-4");
    });
}




//-----------------------  main.js -------------------

$(".button-timer-Lamp-4-Active").click(function() {

  // handle switch on - off after a period time
  // Function timer for Lamp use setTimeout() -- Lamp isn't checking
  var timerForLamp4 = setTimeout(function() {
      if ($("#btn4").is(':checked')) {
          socket.emit("client-send-lamp4-off", "off");
      } else {
          socket.emit("client-send-lamp4-on", "on");
      }
  }, $(".timer-Lamp-4").val() * 1000);

    var valueChange4 = $(".timer-Lamp-4").val();
    // -- display value timer realtime
    // -- button is checking
    if ($("#btn4").is(':checked')) {
        var LampOn4 = FunLampOn4(valueChange4, timerForLamp4);

    } else {
      // -- button ism't checking
      var LampOff4 = FunLampOff4(valueChange4, timerForLamp4);
    }


});

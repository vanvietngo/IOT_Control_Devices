var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer after display value on web
function FunLampOn(valueChangee, timerForLamp0){
  var LampOn = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(LampOn);
        socket.emit("Client-send-Timeout-1");
        // $(".value-timer-lamp-1").html("Time out").hide(4000);

    } else {
        valueChangee -= 1;
        socket.emit("Client-send-ValueTimer-1", valueChangee);
        // $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp OFF").show();;
    }
}, 1000);

// Cancel timer for lamp
$(".button-timer-Lamp-1-Cancel").click(function() {
  // audio
  var beep2 = $("#beep-two")[0];
  beep2.play();

  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-1");
  // $(".value-timer-lamp-1").html("Canceled").hide(4000);
});


// khi dang dem timer ma on off switch thi cancel timer

socket.on('server-send-lamp1-on', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-1");
});

socket.on('server-send-lamp1-off', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-1");
});

}
//--------------------------




function FunLampOff(valueChangee, timerForLamp1){
  var LampOff = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(LampOff);
          socket.emit("Client-send-Timeout-1");
          // $(".value-timer-lamp-1").html("Time out").hide(4000);

      } else {
          valueChangee -= 1;
          socket.emit("Client-send-ValueTimer-1", valueChangee);
          // $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp ON").show();;
      }
  }, 1000);

  // Cancel timer for lamp
  $(".button-timer-Lamp-1-Cancel").click(function() {
    // audio
    var beep2 = $("#beep-two")[0];
    beep2.play();
    
    clearTimeout(timerForLamp1);
    clearInterval(LampOff);
    socket.emit("Client-send-Cancel-Timer-1");
    // $(".value-timer-lamp-1").html("Canceled").hide(4000);
    });

// khi dang dem timer ma on off switch thi cancel timer
    socket.on('server-send-lamp1-on', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-1");
    });

    socket.on('server-send-lamp1-off', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-1");
    });
}




//-----------------------  main.js -------------------

$(".button-timer-Lamp-1-Active").click(function() {
  // audio
  var beep2 = $("#beep-two")[0];
  beep2.play();
  // handle switch on - off after a period time
  // Function timer for Lamp use setTimeout() -- Lamp isn't checking
  var timerForLamp = setTimeout(function() {
      if ($("#btn1").is(':checked')) {
          socket.emit("client-send-lamp1-off", "off");
      } else {
          socket.emit("client-send-lamp1-on", "on");
      }
  }, $(".timer-Lamp-1").val() * 1000);

    var valueChange = $(".timer-Lamp-1").val();
    // -- display value timer realtime
    // -- button is checking
    if ($("#btn1").is(':checked')) {
        var LampOn = FunLampOn(valueChange, timerForLamp);

    } else {
      // -- button ism't checking
      var LampOff = FunLampOff(valueChange, timerForLamp);
    }


});

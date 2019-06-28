var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer after display value on web
function FunLampOn5(valueChangee, timerForLamp0){
  var LampOn = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(LampOn);
        socket.emit("Client-send-Timeout-5");
        // $(".value-timer-lamp-1").html("Time out").hide(4000);

    } else {
        valueChangee -= 1;
        socket.emit("Client-send-ValueTimer-5", valueChangee);
        // $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp OFF").show();;
    }
}, 1000);

// Cancel timer for lamp
$(".button-timer-Lamp-5-Cancel").click(function() {
  // audio
  var beep2 = $("#beep-two")[0];
  beep2.play();
  
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-5");
  // $(".value-timer-lamp-1").html("Canceled").hide(4000);
});


// khi dang dem timer ma on off switch thi cancel timer

socket.on('server-send-lamp5-on', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-5");
});

socket.on('server-send-lamp5-off', function (data) {
  clearTimeout(timerForLamp0);
  clearInterval(LampOn);
  socket.emit("Client-send-Cancel-Timer-5");
});

}
//--------------------------




function FunLampOff5(valueChangee, timerForLamp1){
  var LampOff = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(LampOff);
          socket.emit("Client-send-Timeout-5");
          // $(".value-timer-lamp-1").html("Time out").hide(4000);

      } else {
          valueChangee -= 1;
          socket.emit("Client-send-ValueTimer-5", valueChangee);
          // $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp ON").show();;
      }
  }, 1000);

  // Cancel timer for lamp
  $(".button-timer-Lamp-5-Cancel").click(function() {
    // audio
    var beep2 = $("#beep-two")[0];
    beep2.play();

    clearTimeout(timerForLamp1);
    clearInterval(LampOff);
    socket.emit("Client-send-Cancel-Timer-5");
    // $(".value-timer-lamp-1").html("Canceled").hide(4000);
    });

// khi dang dem timer ma on off switch thi cancel timer
    socket.on('server-send-lamp5-on', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-5");
    });

    socket.on('server-send-lamp5-off', function (data) {
      clearTimeout(timerForLamp1);
      clearInterval(LampOff);
      socket.emit("Client-send-Cancel-Timer-5");
    });
}




//-----------------------  main.js -------------------

$(".button-timer-Lamp-5-Active").click(function() {
  // audio
  var beep2 = $("#beep-two")[0];
  beep2.play();
  // handle switch on - off after a period time
  // Function timer for Lamp use setTimeout() -- Lamp isn't checking
  var timerForLamp5 = setTimeout(function() {
      if ($("#btn5").is(':checked')) {
          socket.emit("client-send-lamp5-off", "off");
      } else {
          socket.emit("client-send-lamp5-on", "on");
      }
  }, $(".timer-Lamp-5").val() * 1000);

    var valueChange5 = $(".timer-Lamp-5").val();
    // -- display value timer realtime
    // -- button is checking
    if ($("#btn5").is(':checked')) {
        var LampOn5 = FunLampOn5(valueChange5, timerForLamp5);

    } else {
      // -- button ism't checking
      var LampOff5 = FunLampOff5(valueChange5, timerForLamp5);
    }


});

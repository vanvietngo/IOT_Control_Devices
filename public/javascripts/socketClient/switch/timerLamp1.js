var socket = io.connect('http://vanvietonline.herokuapp.com/');


// Function handle timer
function FunLampOn(valueChangee, timerForLamp0){
  var hello = setInterval(function() { // when switch is checking ( ~ led is lighting)
    if (valueChangee <= 0) {
        clearInterval(hello);
        $(".value-timer-lamp-1").html("Time out").hide(4000);

    } else {
        valueChangee -= 1;
        $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp OFF").show();;
    }
}, 1000);
$(".button-timer-Lamp-1-Cancel").click(function() {
  clearTimeout(timerForLamp0);
  clearInterval(hello);
  // $(".value-timer-lamp-1").show(2000);
  $(".value-timer-lamp-1").html("Canceled").hide(4000);
});
}
//--------------------------

function FunLampOff(valueChangee, timerForLamp1){
  var hello = setInterval(function() {  // when switch is not checking ( ~ led isn't lighting)
      if (valueChangee <= 0) {
          clearInterval(hello);
          $(".value-timer-lamp-1").html("Time out").hide(4000);

      } else {
          valueChangee -= 1;
          $(".value-timer-lamp-1").html("After  " + valueChangee + " s Lamp ON").show();;
      }
  }, 1000);
  $(".button-timer-Lamp-1-Cancel").click(function() {
    clearTimeout(timerForLamp1);
    clearInterval(hello);
    $(".value-timer-lamp-1").html("Canceled").hide(4000);
    });
}
//-----------------------  main.js -------------------

$(".button-timer-Lamp-1-Active").click(function() {

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

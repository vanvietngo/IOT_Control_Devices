socket.on('server-send-rainning', function () {
  var beepWarning = $("#beep-warning")[0];
  var temp_Cancel = 0;
  var now = new Date();
  $('.Time-Rain').html('<br><br>' + new Date(now + " GMT-0000").toUTCString());
  var myStop_Function_Rainning = setInterval(function(){
    temp_Cancel += 1;
    $(".class-Rainning").fadeOut(100).fadeIn(100);
    beepWarning.play();

    if(temp_Cancel > 20){
// blink 11s  after recive signal for esp
      clearInterval(myStop_Function_Rainning);
    }
  }, 500);
  $(".class-Rainning").click(function(){
    clearInterval(myStop_Function_Rainning);
  })
});

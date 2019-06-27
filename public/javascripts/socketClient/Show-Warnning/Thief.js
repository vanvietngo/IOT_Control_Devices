socket.on('server-send-Thief', function () {
  var myStopFunction = setInterval(function(){
    $("#someElement").fadeOut(100).fadeIn(100);
  }, 500);

  $("#someElement").click(function(){
    clearInterval(myStopFunction);
  })
});

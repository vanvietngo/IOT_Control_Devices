socket.on('server-send-rainning', function () {
  var myStop_Function_Rainning = setInterval(function(){
    $(".class-Rainning").fadeOut(100).fadeIn(100);
  }, 500);

  $(".class-Rainning").click(function(){
    clearInterval(myStop_Function_Rainning);
  })
});

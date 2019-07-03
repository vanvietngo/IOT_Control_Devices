socket.on('server-send-Thief', function () {
  console.log('da nhan thief');
  var myStop_Function_Thief = setInterval(function(){
    $(".class-Thief").fadeOut(100).fadeIn(100);
  }, 500);

  $(".class-Thief").click(function(){
    clearInterval(myStop_Function_Thief);
  })
});
